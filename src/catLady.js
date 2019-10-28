class CatLady {
    constructor() {
        this.setRandomPosition()
    }

    setRandomPosition() {

        this.col = Math.floor((Math.random() * 10)) * SQUARE_SIDE;
        this.row = Math.floor((Math.random() * 10)) * SQUARE_SIDE;
    }

    preload() {
        this.catLady = loadImage("../assets/catLady.png")
    }


    drawCatLady() {
        image(this.catLady, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE)
    }

}