package repositories

import (
	interfaces "sibgreh/effort/internal/repositories/interfaces"
	postgres "sibgreh/effort/internal/repositories/postgres"
)

type RepositoryRegistry struct {
	Home interfaces.HomeRepository
}

var repo *RepositoryRegistry

func Init() {
	repo = &RepositoryRegistry{
		Home: &postgres.HomeRepository{},
	}
}

func GetRepository() *RepositoryRegistry {
	return repo
}
