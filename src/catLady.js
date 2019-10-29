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

    // tells you tha the catLady is moving to the right
    catLadyMoveRight() {
        this.col += SQUARE_SIDE;
        this.movementArr.pop()
        this.movementArr.push('right')
    }

    // tells you tha the catLady is moving down
    catLadyMoveDown() {
        this.row += SQUARE_SIDE;
        this.movementArr.pop()
        this.movementArr.push('down')
    }

    // tells you tha the catLady is moving to the left
    catLadyMoveLeft() {
        this.col -= SQUARE_SIDE;
        this.movementArr.pop()
        this.movementArr.push('left')
    }

    // tells you tha the catLady is moving up
    catLadyMoveUp() {
        this.row -= SQUARE_SIDE;
        this.movementArr.pop()
        this.movementArr.push('up')
    }


    // *** ANDRE is going to help with this in the morning ****

    // distanceCheck() {

    //     x = this.col;
    //     y = this.row;


    //     let drinkLocations = [{
    //             glasses.x = MATH.abs(x - glasses.col),
    //             glasses.y = MATH.abs(y - glasses.row)
    //         },
    //         {
    //             glasses2.x = MATH.abs(x - glasses2.col),
    //             glasses2.y = MATH.abs(y - glasses2.row)
    //         },
    //         {
    //             glasses3.x = MATH.abs(x - glasses3.col),
    //             glasses3.y = MATH.abs(y - glasses3.row)
    //         }
    //     ]


    //     average = drinkLocations.reduce(function (sum, value) {
    //         return sum + value;
    //     }, 0) / array.length;

    //     return average;


    // }

    // calculates the difference between the catLady and one drink
    catLadyMover = () => {
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