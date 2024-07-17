package handlers

import (
	"log"
	"net/http"
	"strconv"

	"github.com/go-chi/chi/v5"

	repositories "sibgreh/effort/internal/repositories"
	t "sibgreh/effort/internal/repositories/shared_types"
	utils "sibgreh/effort/pkg/utils"
)

type UserHandler struct{}

func (h *UserHandler) List(responseWriter http.ResponseWriter, request *http.Request) {
	data, _ := repositories.GetRepository().User.List()

	response := utils.JSONResponse{
		Content: data,
	}

	utils.WriteJSON(responseWriter, http.StatusOK, response)
}

func (h *UserHandler) Create(responseWriter http.ResponseWriter, request *http.Request) {
	var requestData t.User

	err := utils.ReadJSON(responseWriter, request, &requestData)
	if err != nil {
		log.Println("error reading json", err)
		return
	}

	newID := repositories.GetRepository().User.Create(&requestData)

	response := utils.JSONResponse{
		Content: newID,
	}

	utils.WriteJSON(responseWriter, http.StatusOK, response)
}

func (h *UserHandler) Delete(responseWriter http.ResponseWriter, request *http.Request) {
	userID, err := strconv.Atoi(chi.URLParam(request, "id"))
	if err != nil {
		log.Println("error parsing id", err)
		return
	}

	repositories.GetRepository().User.Delete(userID)

	response := utils.JSONResponse{
		Content: true,
	}

	utils.WriteJSON(responseWriter, http.StatusOK, response)
}
