class CatLady {
    constructor(col, row) {
        this.setRandomPosition()
    }

    // this sets the initial position of the catLady
    setRandomPosition() {

        this.col = Math.floor((Math.random() * 10)) * SQUARE_SIDE;
        this.row = Math.floor((Math.random() * 10)) * SQUARE_SIDE;
    }


    // this preloads the catLady image
    preload() {
        this.catLady = loadImage("../assets/catLady.png")
    }

    // positions the catLady on the grid
    drawCatLady() {
        image(this.catLady, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE)

    }

    distanceCheck = () => {
        if (this.col < glasses.col) {
            this.col += SQUARE_SIDE
            console.log(`x: ${this.col}`)
        } else if (this.row < glasses.row) {
            this.row += SQUARE_SIDE
            console.log(`y: ${this.row}`)
        } else if (this.col > glasses.col) {
            this.col -= SQUARE_SIDE
            console.log(`x: ${this.col}`)
        } else if (this.row > glasses.row) {
            this.row -= SQUARE_SIDE
            console.log(`y: ${this.row}`)
        }

    }
}