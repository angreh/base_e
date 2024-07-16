package main

import (
	"fmt"
	"log"
	"net/http"

	"sibgreh/effort/internal/repositories"
	"sibgreh/effort/internal/router"
	"sibgreh/effort/pkg/db"
)

const port = 8080
const DSN = "host=localhost port=5432 user=postgres password=password dbname=effort_app sslmode=disable timezone=UTC connect_timeout=5"

func main() {
	db.Init(DSN)
	repositories.Init()
	appRouter := router.Init()

	log.Printf("Server started on http://localhost:%d", port)
	err := http.ListenAndServe(fmt.Sprintf(":%d", port), appRouter)
	if err != nil {
		panic(err)
	}
}
