package repositories

import (
	"context"
	"log"
	"time"

	t "sibgreh/effort/internal/repositories/shared_types"
	"sibgreh/effort/pkg/db"
)

type UserRepository struct {
}

func (r *UserRepository) List() ([]*t.User, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	query := "SELECT id,name,email,password FROM users"
	rows, err := db.CON.QueryContext(ctx, query)
	if err != nil {
		log.Println("Error quering users", err)
		return []*t.User{}, err
	}
	defer rows.Close()

	var actions []*t.User

	for rows.Next() {
		var action t.User
		err = rows.Scan(&action.ID, &action.Name, &action.Email, &action.Password)
		if err != nil {
			log.Println("Error scanning users", err)
			return []*t.User{}, err
		}

		actions = append(actions, &action)
	}

	return actions, nil
}

func (r *UserRepository) Create(user *t.User) int {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	var newID int
	query := "INSERT INTO users (name,email,password) VALUES ($1,$2,$3) RETURNING id"
	err := db.CON.QueryRowContext(ctx, query, user.Name, user.Email, user.Password).Scan(&newID)
	if err != nil {
		log.Println("error inserting user", err)
		return 0
	}

	return newID
}

func (r *UserRepository) Delete(userId int) bool {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	query := "DELETE FROM users WHERE id = $1"
	_, err := db.CON.ExecContext(ctx, query, userId)
	if err != nil {
		log.Println("error deleting user", err)
		return false
	}

	return true
}
