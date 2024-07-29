package repositories

import (
	t "sibgreh/effort/internal/repositories/shared_types"
)

type ActionRepository interface {
	List() ([]*t.Action, error)
	Create(action *t.Action, userID int) int
	Delete(actionID int) bool
}
