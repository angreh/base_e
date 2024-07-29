package repositories

import (
	"time"
)

type Action struct {
	ID           int64     `json:"id,omitempty"`
	Title        string    `json:"title"`
	Description  string    `json:"description,omitempty"`
	Duration     int32     `json:"duration,omitempty"`
	Difficulty   int8      `json:"difficulty,omitempty"`
	Importance   int8      `json:"importance,omitempty"`
	EmotionalTax int8      `json:"emotional_tax,omitempty"`
	Priority     int8      `json:"priority,omitempty"`
	StartDate    time.Time `json:"start_date,omitempty"`
	EndDate      time.Time `json:"end_date,omitempty"`
	CreatedAt    time.Time `json:"create_at,omitempty"`
	UpdatedAt    time.Time `json:"updated_at,omitempty"`
}
