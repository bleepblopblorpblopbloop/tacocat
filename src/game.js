class Game {
    drawGrid() {
        strokeWeight(3)
        rect(0, 0, WIDTH, HEIGHT)
    }

    drawTable() {
        strokeWeight(2)
        rect((0 + (WIDTH * 0.1)), (0 + (HEIGHT * 0.1)), WIDTH * 0.8, HEIGHT * 0.8)
    }

}