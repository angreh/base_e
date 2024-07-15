package main

import (
	"fmt"
	"log"
	"net/http"

	"sibgreh/effort/internal/repositories"
	"sibgreh/effort/internal/router"
)

const port = 8080

func main() {
	repositories.Init()
	appRouter := router.Init()

	log.Printf("Server started on http://localhost:%d", port)
	err := http.ListenAndServe(fmt.Sprintf(":%d", port), appRouter)
	if err != nil {
		panic(err)
	}
}
