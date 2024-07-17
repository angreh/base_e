package repositories

import (
	interfaces "sibgreh/effort/internal/repositories/interfaces"
	postgres "sibgreh/effort/internal/repositories/postgres"
)

type RepositoryRegistry struct {
	Home   interfaces.HomeRepository
	Action interfaces.ActionRepository
	User   interfaces.UserRepository
}

var repo *RepositoryRegistry

func Init() {
	repo = &RepositoryRegistry{
		Home:   &postgres.HomeRepository{},
		Action: &postgres.ActionRepository{},
		User:   &postgres.UserRepository{},
	}
}

func GetRepository() *RepositoryRegistry {
	return repo
}
