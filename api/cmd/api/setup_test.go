package main

import (
	"log"
	"os"
	"testing"
	// "sibgreh/effort/internal/repositories"
)

func TestMain(m *testing.M) {
	log.Println("TestMain SETUP")
	// repositories.Init()

	log.Println("Repository initialized")

	os.Exit(m.Run())
}
