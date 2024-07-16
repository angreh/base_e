package handlers

var Home *HomeHandler
var Action *ActionHandler

func Init() {
	Home = &HomeHandler{}
	Action = &ActionHandler{}
}
