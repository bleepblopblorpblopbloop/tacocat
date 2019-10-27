class Glasses {
    constructor() {
        this.setRandomPosition()
    }

    // this seets the intial position of the beer to a random position on the board
    setRandomPosition() {
        this.col = Math.floor((Math.random() * 10)) * SQUARE_SIDE;
        this.row = Math.floor((Math.random() * 10)) * SQUARE_SIDE;
    }

    // this slides the beer one position to the side opposite from the direction which tacocat is pushing
    // slideToNextSpot() {
    //     if (glasses.setRandomPosition().this.row === (player.this.row + (WIDTH * 0.1) && player.keyPressed() === 39)) {
    //         glasses.setRandomPosition().this.row += (WIDTH * 0.1);
    //     } else if (glasses.setRandomPosition().this.row === (player.this.row - (WIDTH * 0.1) && player.keyPressed() === 37)) {
    //         glasses.setRandomPosition().this.row -= (WIDTH * 0.1);
    //     } else if (glasses.setRandomPosition().this.col === (player.this.col + (HEIGHT * 0.1) && player.keyPressed() === 38)) {
    //         glasses.setRandomPosition().this.col -= (HEIGHT * 0.1);
    //     } else if (glasses.setRandomPosition().this.col === (player.this.col - (HEIGHT * 0.1) && player.keyPressed() === 40)) {
    //         glasses.setRandomPosition().this.col += (HEIGHT * 0.1);
    //     }

    // }


    preload() {
        this.beer = loadImage("../assets/beermug.png")
    }


    drawGlasses() {
        image(this.beer, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE)
    }

}