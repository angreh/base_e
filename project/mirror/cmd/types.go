package main

import "time"

type Language string

type Tags map[string]string

type Person struct {
	FName     string         `mirror:"name:first_name"`
	LName     string         `mirror:"name:last_name"`
	Age       int            `mirror:"name:age"`
	Languages []Language     `mirror:"name:languages"`
	Grades    map[string]int `mirror:"name:grades,optional:1"`
	Tags      Tags           `mirror:"name:tags"`
	CreatedAt time.Time      `mirror:"name:created_at"`
	UpdatedAt *time.Time     `mirror:"name:updated_at"`
	DeletedAt *time.Time     `mirror:"name:deleted_at"`
}
