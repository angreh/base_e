package repositories

import (
	"context"
	"log"
	"time"

	t "sibgreh/effort/internal/repositories/shared_types"
	"sibgreh/effort/pkg/db"
)

type ActionRepository struct {
}

func (r *ActionRepository) List() ([]*t.Action, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	query := "SELECT id,title FROM tasks"
	rows, err := db.CON.QueryContext(ctx, query)
	if err != nil {
		log.Println("Error quering tasks", err)
		return []*t.Action{}, err
	}
	defer rows.Close()

	var actions []*t.Action

	for rows.Next() {
		var action t.Action
		err = rows.Scan(&action.ID, &action.Title)
		if err != nil {
			log.Println("Error scanning task", err)
			return []*t.Action{}, err
		}

		actions = append(actions, &action)
	}

	return actions, nil
}

func (r *ActionRepository) Create(action *t.Action, userID int) int {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	tx, err := db.CON.BeginTx(ctx, nil)
	if err != nil {
		log.Println("error starting transaction", err)
		return 0
	}

	var newID int
	query := "INSERT INTO tasks (title,difficulty,importance,emotional_tax) VALUES ($1,$2,$3,$4) RETURNING id"
	err = tx.QueryRowContext(ctx, query, action.Title, action.Difficulty, action.Importance, action.EmotionalTax).Scan(&newID)
	if err != nil {
		tx.Rollback()
		log.Println("error inserting user", err)
		return 0
	}

	query = "INSERT INTO rel_tasks_users (user_id, task_id) VALUES ($1, $2)"
	_, err = tx.ExecContext(ctx, query, userID, newID)
	if err != nil {
		tx.Rollback()
		log.Println("error inserting user relation", err)
		return 0
	}

	err = tx.Commit()
	if err != nil {
		log.Println("error commiting transaction", err)
		return 0
	}

	return newID
}

func (r *ActionRepository) Delete(actionID int) bool {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	tx, err := db.CON.BeginTx(ctx, nil)
	if err != nil {
		log.Println("error starting transaction", err)
		return false
	}

	query := "DELETE FROM rel_tasks_users WHERE task_id = $1"
	_, err = tx.ExecContext(ctx, query, actionID)
	if err != nil {
		log.Println("error deleting action relation", err)
		return false
	}

	query = "DELETE FROM tasks WHERE id = $1"
	_, err = tx.ExecContext(ctx, query, actionID)
	if err != nil {
		log.Println("error deleting action", err)
		return false
	}

	err = tx.Commit()
	if err != nil {
		log.Println("error commiting transaction", err)
		return false
	}

	return true
}
