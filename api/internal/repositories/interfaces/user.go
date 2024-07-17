package repositories

import (
	t "sibgreh/effort/internal/repositories/shared_types"
)

type UserRepository interface {
	List() ([]*t.User, error)
	Create(user *t.User) int
	Delete(userId int) bool
}
