package main

import (
	"fmt"
	"log"

	t "sibgreh/project/internal/repositories/shared_types"

	"go.trulyao.dev/mirror"
	"go.trulyao.dev/mirror/config"
)

func main() {
	log.Println("Hello World")

	gt := mirror.New(config.Config{
		Enabled:           mirror.Bool(true),
		OutputFile:        mirror.String("shared_types.ts"),
		UseTypeForObjects: mirror.Bool(true),
		ExpandObjectTypes: mirror.Bool(true),
	})

	// // ===> Individually
	// gt.AddSource(*new(Language))
	// gt.AddSource(Tags{})
	// gt.AddSource(Person{})

	// out, err := gt.Generate()
	// if err != nil {
	// 	fmt.Println(err)
	// 	return
	// }

	// ===> save to file
	// err = gt.Commit(out)
	// if err != nil {
	// 	fmt.Println(err)
	// 	return
	// }

	// ===> As a group
	gt.Register(t.HomeResponse{}, t.Action{}, t.User{})

	// ===> generate types and save to the file
	err := gt.Execute(true)
	if err != nil {
		fmt.Println(err)
		return
	}
}
