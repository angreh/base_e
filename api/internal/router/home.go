package router

import "sibgreh/effort/internal/handlers"

func defineHomeRoutes() {
	mux.Get("/", handlers.Home.Home)
}
