package repositories

import (
	t "sibgreh/effort/internal/repositories/shared_types"
)

type HomeRepository struct {
}

func (r *HomeRepository) Home() t.HomeResponse {
	return t.HomeResponse{
		Home: "Hello World",
	}
}
