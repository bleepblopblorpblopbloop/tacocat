class CatLady {
    constructor(col, row) {
        // this sets a random position within a pre-defined range - allows us to have the lady appear inside the edge of the table
        this.setRandomPosition(1, 8);
        this.movementArr = ['start']
    }

    // this sets the initial position of the catLady
    setRandomPosition(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        this.col = Math.floor((Math.random() * (max - min + 1)) + min) * (SQUARE_SIDE);
        this.row = Math.floor((Math.random() * (max - min + 1)) + min) * (SQUARE_SIDE);
    }


    // this preloads the catLady image
    preload() {
        this.catLady = loadImage("../assets/catLady.png")
    }

    // positions the catLady on the grid
    drawCatLady() {
        image(this.catLady, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE)

    }

    catLadyMoveRight() {
        this.col += SQUARE_SIDE;
        this.movementArr.pop()
        this.movementArr.push('right')
    }

    catLadyMoveDown() {
        this.row += SQUARE_SIDE;
        this.movementArr.pop()
        this.movementArr.push('down')
    }

    catLadyMoveLeft() {
        this.col -= SQUARE_SIDE;
        this.movementArr.pop()
        this.movementArr.push('left')
    }

    catLadyMoveUp() {
        this.row -= SQUARE_SIDE;
        this.movementArr.pop()
        this.movementArr.push('up')
    }


    distanceCheck = () => {
        if (this.col < glasses.col) {
            this.catLadyMoveRight();
            console.log(`x: ${this.col}`)
        } else if (this.row < glasses.row) {
            this.catLadyMoveDown();
            console.log(`y: ${this.row}`)
        } else if (this.col > glasses.col) {
            this.catLadyMoveLeft();
            console.log(`x: ${this.col}`)
        } else if (this.row > glasses.row) {
            this.catLadyMoveUp();
            console.log(`y: ${this.row}`)
        }

    }


}