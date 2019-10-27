class Glasses {
    constructor() {
        this.setRandomPosition()
    }

    setRandomPosition() {

        this.col = Math.floor((Math.random() * 10)) * SQUARE_SIDE;
        this.row = Math.floor((Math.random() * 10)) * SQUARE_SIDE;
    }

    preload() {
        this.beer = loadImage("../assets/beermug.png")
    }


    drawGlasses() {
        image(this.beer, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE)
    }

}