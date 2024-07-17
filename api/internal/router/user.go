package router

import "sibgreh/effort/internal/handlers"

func defineUserRoutes() {
	mux.Get("/user", handlers.User.List)
	mux.Post("/user", handlers.User.Create)
	mux.Delete("/user/{id}", handlers.User.Delete)
}
