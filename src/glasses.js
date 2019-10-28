class Glasses {
    constructor() {
        this.setRandomPosition()
    }

    // this seets the intial position of the beer to a random position on the board
    setRandomPosition() {
        this.col = Math.floor((Math.random() * 10)) * SQUARE_SIDE;
        this.row = Math.floor((Math.random() * 10)) * SQUARE_SIDE;
    }


    preload() {
        this.beer = loadImage("../assets/beermug.png")
    }

    // positions the glass on the grid
    drawGlasses() {
        image(this.beer, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE)
    }

    // this moves the glass in the direction of the keyPress
    keyPressed() {
        if (keyCode === 37) {
            this.col -= SQUARE_SIDE
        } else if (keyCode === 39) {
            this.col += SQUARE_SIDE
        } else if (keyCode === 40) {
            this.row += SQUARE_SIDE
        } else if (keyCode === 38) {
            this.row -= SQUARE_SIDE
        }
    }

}