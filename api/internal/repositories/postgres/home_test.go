package repositories

import (
	"testing"
)

func Test_HomeRepository(t *testing.T) {
	r := HomeRepository{}
	response := r.Home()

	if string(response.Home) != "Hello World" {
		t.Errorf("wrong return value")
	}
}
