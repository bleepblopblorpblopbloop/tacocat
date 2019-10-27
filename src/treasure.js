class Treasure {
    constructor() {
        this.setRandomPositon()
        // this.col;
        // this.row
    }

    setRandomPositon() {

        this.col = Math.floor((Math.random() * 10)) * SQUARE_SIDE;
        this.row = Math.floor((Math.random() * 10)) * SQUARE_SIDE;
    }


    preload() {
        this.img2 = loadImage("../assets/josephine-versoza-pixel-mug-beer.jpg")
    }


    drawTreasure() {
        image(this.img2, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE)
    }


}