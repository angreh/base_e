package router

import "sibgreh/effort/internal/handlers"

func defineActionRoutes() {
	mux.Get("/action", handlers.Action.List)
	mux.Post("/action", handlers.Action.Create)
	mux.Delete("/action/{id}", handlers.Action.Delete)
}
