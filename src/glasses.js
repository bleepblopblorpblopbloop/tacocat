class Glasses {
    constructor() {
        this.setRandomPositon()
    }

    setRandomPositon() {

        this.col = Math.floor((Math.random() * 10)) * SQUARE_SIDE;
        this.row = Math.floor((Math.random() * 10)) * SQUARE_SIDE;
    }


    preload() {
        this.img2 = loadImage("../assets/beermug.png")
    }


    drawGlasses() {
        image(this.img2, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE)
    }


}