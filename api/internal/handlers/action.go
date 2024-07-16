package handlers

import (
	"net/http"

	repositories "sibgreh/effort/internal/repositories"
	utils "sibgreh/effort/pkg/utils"
)

type ActionHandler struct{}

func (h *ActionHandler) List(responseWriter http.ResponseWriter, request *http.Request) {
	data, _ := repositories.GetRepository().Action.List()

	response := utils.JSONResponse{
		Content: data,
	}

	utils.WriteJSON(responseWriter, http.StatusOK, response)
}
