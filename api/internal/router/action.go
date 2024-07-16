package router

import "sibgreh/effort/internal/handlers"

func defineActionRoutes() {
	mux.Get("/action", handlers.Action.List)
}
