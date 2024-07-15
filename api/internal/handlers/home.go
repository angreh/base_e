package handlers

import (
	"net/http"

	repositories "sibgreh/effort/internal/repositories"
	utils "sibgreh/effort/pkg/utils"
)

type HomeHandler struct{}

func (h *HomeHandler) Home(responseWriter http.ResponseWriter, request *http.Request) {
	data := repositories.GetRepository().Home.Home()

	response := utils.JSONResponse{
		Content: data,
	}

	utils.WriteJSON(responseWriter, http.StatusOK, response)
	// responseWriter.Write([]byte(repositories.GetRepository().Home.Home().Home))
	// responseWriter.Write([]byte("Hello World"))
}
