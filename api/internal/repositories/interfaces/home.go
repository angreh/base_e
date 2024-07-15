package repositories

import (
	t "sibgreh/effort/internal/repositories/response_types"
)

type HomeRepository interface {
	Home() t.HomeResponse
}
