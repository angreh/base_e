package handlers

import (
	"io"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"

	"sibgreh/effort/internal/repositories"
)

func Test_HomeHandler(t *testing.T) {
	repositories.Init()
	var reader io.Reader = strings.NewReader("Hello World")

	req, _ := http.NewRequest("GET", "/", reader)
	rr := httptest.NewRecorder()
	handler := http.HandlerFunc(Home.Home)

	handler.ServeHTTP(rr, req)
	if status := rr.Code; status != http.StatusOK {
		t.Errorf(
			"handler returned wrong status code: got %v want %v",
			status,
			http.StatusOK,
		)
	}

	if rr.Body.String() != "{\"content\":{\"home\":\"Hello World\"}}" {
		t.Errorf(
			"handler returned unexpected body: got %v want %v",
			rr.Body.String(),
			"{\"content\":{\"home\":\"Hello World\"}}",
		)
	}
}
