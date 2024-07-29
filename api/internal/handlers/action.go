package handlers

import (
	"log"
	"net/http"

	repositories "sibgreh/effort/internal/repositories"
	t "sibgreh/effort/internal/repositories/shared_types"
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

type CreateRequestData struct {
	Action t.Action `json:"action"`
	UserID int      `json:"user_id"`
}

func (h *ActionHandler) Create(responseWriter http.ResponseWriter, request *http.Request) {
	log.Println("create action")

	var requestData CreateRequestData
	err := utils.ReadJSON(responseWriter, request, &requestData)
	if err != nil {
		log.Println("error reading json", err)
		return
	}

	log.Println(requestData)

	newID := repositories.GetRepository().Action.Create(&requestData.Action, requestData.UserID)

	response := utils.JSONResponse{
		Content: newID,
	}
	utils.WriteJSON(responseWriter, http.StatusOK, response)
}
