package repositories

import (
	t "sibgreh/effort/internal/repositories/shared_types"
)

type ActionRepository interface {
	List() ([]*t.Action, error)
}
