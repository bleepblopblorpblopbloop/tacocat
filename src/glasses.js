class Glasses {
    constructor() {
        this.setRandomPosition()
    }

    // this seets the intial position of the beer to a random position on the board
    setRandomPosition() {
        this.col = Math.floor((Math.random() * 10)) * SQUARE_SIDE;
        this.row = Math.floor((Math.random() * 10)) * SQUARE_SIDE;
    }

    // 
    moveDown() {
        if (this.row < (WIDTH - (WIDTH * 0.1))) {
            this.row += side;
            console.log(this.col)
        }
    }

    moveUp() {
        if (this.row > 0) {
            this.row -= side;
            console.log(this.col)

        }
    }

    moveLeft() {
        if (this.col < HEIGHT && this.col >= (HEIGHT * 0.1)) {
            this.col -= side;
        }
    }

    moveRight() {
        if (this.col < (HEIGHT - (HEIGHT * 0.1))) {
            this.col += side;
        }
    }


    preload() {
        this.beer = loadImage("../assets/beermug.png")
    }


    drawGlasses() {
        image(this.beer, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE)
    }

    // this moves the glass in the direction of the keyPress
    keyPressed() {
        if (keyCode === 37) {
            this.moveLeft();
        } else if (keyCode === 39) {
            this.moveRight();
        } else if (keyCode === 40) {
            this.moveDown();
        } else if (keyCode === 38) {
            this.moveUp();
        }
    }

}