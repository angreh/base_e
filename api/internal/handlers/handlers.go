package handlers

var Home *HomeHandler

func Init() {
	Home = &HomeHandler{}
}
