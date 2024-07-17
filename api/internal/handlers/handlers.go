package handlers

var Home *HomeHandler
var Action *ActionHandler
var User *UserHandler

func Init() {
	Home = &HomeHandler{}
	Action = &ActionHandler{}
	User = &UserHandler{}
}
