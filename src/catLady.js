class CatLady {
    constructor(col, row) {
        // this sets a random position within a pre-defined range - allows us to have the lady appear inside the edge of the table
        this.setRandomPosition(1, 8);
        this.movementArr = ['start']
    }

    // this sets the initial position of the catLady
    setRandomPosition(min, max) {
        // min = Math.ceil(min);
        // max = Math.floor(max);
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

    // tells you that the catLady is moving to the right
    catLadyMoveRight() {
        this.col += SQUARE_SIDE;
        this.movementArr.pop()
        this.movementArr.push('right')
    }

    // tells you that the catLady is moving down
    catLadyMoveDown() {
        this.row += SQUARE_SIDE;
        this.movementArr.pop()
        this.movementArr.push('down')
    }

    // tells you that the catLady is moving to the left
    catLadyMoveLeft() {
        this.col -= SQUARE_SIDE;
        this.movementArr.pop()
        this.movementArr.push('left')
    }

    // tells you that the catLady is moving up
    catLadyMoveUp() {
        this.row -= SQUARE_SIDE;
        this.movementArr.pop()
        this.movementArr.push('up')
    }


    // *** ANDRE is going to help with this in the morning ****

    distanceCheck() {

        // variables representing the distance between the catLady's x,y coordinates and the different glasses x,y coordinates
        const glassesX = Math.abs(this.col - glasses.col)
        const glassesY = Math.abs(this.row - glasses.row)
        const glasses2X = Math.abs(this.col - glasses2.col)
        const glasses2Y = Math.abs(this.row - glasses2.row)
        const glasses3X = Math.abs(this.col - glasses3.col)
        const glasses3Y = Math.abs(this.row - glasses3.row)


        // function to calculate an average
        const average = array => {
            const averageVal = array.reduce(function (sum, value) {
                return sum + value;
            }, 0) / array.length;
            return averageVal
        }

        // variable containing an array with the location of each drink on the board
        let drinkLocations = [
            [glassesX, glassesY],
            [glasses2X, glasses2Y],
            [glasses3X, glasses3Y]
        ]

        // function returning an array representing the distance from the catLady to each drink
        const drinkDistances = drinkLocations.map(function (el) {
            return average(el)
        })

        // variable containing the distance value of the closest drink
        const drinkDistancesMin = Math.min(...drinkDistances)

        // variable containg the index of the closest drink
        const position = drinkDistances.indexOf(drinkDistancesMin)

        // variable containing location info for all of the glasses on the board
        const allGlasses = [glasses, glasses2, glasses3];

        // variable containg the index of the 
        this.focused = allGlasses[position];

        // if statement forcing the catLady to make a decision if two glasses are the same distance
        if (allGlasses[position] === undefined) {
            this.focused = allGlasses[0]
        }

    }

    // moves the catLady towards the closest drink on the board 
    catLadyMover = () => {
        if (this.col < this.focused.col) {
            this.catLadyMoveRight();
            console.log(`x: ${this.col}`)
        } else if (this.row < this.focused.row) {
            this.catLadyMoveDown();
            console.log(`y: ${this.row}`)
        } else if (this.col > this.focused.col) {
            this.catLadyMoveLeft();
            console.log(`x: ${this.col}`)
        } else if (this.row > this.focused.row) {
            this.catLadyMoveUp();
            console.log(`y: ${this.row}`)
        }

    }


}