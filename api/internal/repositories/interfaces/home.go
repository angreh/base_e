package repositories

import (
	t "sibgreh/effort/internal/repositories/shared_types"
)

type HomeRepository interface {
	Home() t.HomeResponse
}
