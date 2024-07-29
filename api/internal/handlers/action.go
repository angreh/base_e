package handlers

import (
	"log"
	"net/http"
	"strconv"

	repositories "sibgreh/effort/internal/repositories"
	t "sibgreh/effort/internal/repositories/shared_types"
	utils "sibgreh/effort/pkg/utils"

	"github.com/go-chi/chi/v5"
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
	var requestData CreateRequestData
	err := utils.ReadJSON(responseWriter, request, &requestData)
	if err != nil {
		log.Println("error reading json", err)
		return
	}

	newID := repositories.GetRepository().Action.Create(&requestData.Action, requestData.UserID)

	response := utils.JSONResponse{
		Content: newID,
	}
	utils.WriteJSON(responseWriter, http.StatusOK, response)
}

func (h *ActionHandler) Delete(responseWriter http.ResponseWriter, request *http.Request) {
	taskID, err := strconv.Atoi(chi.URLParam(request, "id"))
	if err != nil {
		log.Println("error parsing id", err)
		return
	}

	result := repositories.GetRepository().Action.Delete(taskID)

	log.Println("delete task", taskID)
	log.Println("result", result)
	// vars := mux.Vars(request)

	// id, err := strconv.Atoi(vars["id"])
	// if err != nil {
	// 	log.Println("error reading id", err)
	// 	return
	// }

	// repositories.GetRepository().Action.Delete(id)

	response := utils.JSONResponse{
		Content: result,
	}
	utils.WriteJSON(responseWriter, http.StatusOK, response)
}
