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

    distanceCheck() {


        const glassesX = Math.abs(this.col - glasses.col)
        const glassesY = Math.abs(this.row - glasses.row)
        const glasses2X = Math.abs(this.col - glasses2.col)
        const glasses2Y = Math.abs(this.row - glasses2.row)
        const glasses3X = Math.abs(this.col - glasses3.col)
        const glasses3Y = Math.abs(this.row - glasses3.row)

        const average = array => {
            const averageVal = array.reduce(function (sum, value) {
                return sum + value;
            }, 0) / array.length;
            return averageVal
        }


        let drinkLocations = [
            [glassesX, glassesY],
            [glasses2X, glasses2Y],
            [glasses3X, glasses3Y]
        ]

        const drinkDistances = drinkLocations.map(function (el) {
            return average(el)
        })

        const drinkDistancesMin = Math.min(...drinkDistances)
        console.log(Math.min(...drinkDistances))

        const allGlasses = [glasses, glasses2, glasses3];

        const position = drinkDistances.indexOf(drinkDistancesMin)

        this.focused = allGlasses[position];

        if (allGlasses[position] === undefined) {
            this.focused = allGlasses[0]
        }
        console.log('GLASS FOCUSED IN POSITION ', this.focused)

    }

    // calculates the difference between the catLady and one drink
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