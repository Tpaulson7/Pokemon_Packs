package main

// Transfer JSON to PostgreSQL
type Card struct {
    Name  string `json:"name"`
    Type  string `json:"type"`
    Image string `json:"image"`
}

type CardData struct {
    Common   []Card `json:"common"`
    Uncommon []Card `json:"uncommon"`
    Rare     []Card `json:"rare"`
    Energy   []Card `json:"energy"`
}

func main() {
    
}
