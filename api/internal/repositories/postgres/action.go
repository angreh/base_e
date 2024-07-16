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
