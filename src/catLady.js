class CatLady {
    constructor(col, row) {
        // this.setRandomPosition()
        this.col = col;
        this.row = row;
        this.catLady;

    }

    // this sets the initial position of the catLady
    setRandomPosition() {

        this.col = Math.floor((Math.random() * 10)) * SQUARE_SIDE;
        this.row = Math.floor((Math.random() * 10)) * SQUARE_SIDE;
    }


    // this preloads the catLady image
    preload() {
        this.catLady = loadImage("../assets/catLady.png")
    }

    // positions the catLady on the grid
    drawCatLady() {
        image(this.catLady, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE)

    }
    distanceCheck() {
        while (this.col < glasses.col) {
            this.col += SQUARE_SIDE
            console.log(`x: ${this.col}`)
        }

        while (this.row < glasses.row) {
            this.row += SQUARE_SIDE
            console.log(`y: ${this.row}`)
        }

        while (this.col > glasses.col) {
            this.col -= SQUARE_SIDE
            console.log(`x: ${this.col}`)
        }

        while (this.row > glasses.row) {
            this.row -= SQUARE_SIDE
            console.log(`y: ${this.row}`)
        }

    }

    // determines the distance between the catlady and the drink
    // distanceCheck() {
    //     // drink position
    //     let target = {
    //         x: glasses.col,
    //         y: glasses.row
    //     };

    //     // mycatLady position
    //     let ladyPosition = {
    //         x: catLady.col,
    //         y: catLady.row
    //     };


    //     while (this.col !== target.x && this.row !== target.y) {
    //         // setInterval(() => {
    //         if (catLady.col < target.x) {

    //             this.col += SQUARE_SIDE

    //             console.log(`x: ${ladyPosition.x}`)
    //         }

    //         if (this.row < target.y) {
    //             this.row += SQUARE_SIDE
    //             console.log(`y: ${ladyPosition.y}`)
    //         }

    //         if (this.col > target.x) {
    //             this.col -= SQUARE_SIDE
    //             console.log(`x: ${ladyPosition.x}`)
    //         }

    //         if (this.row > target.y) {
    //             this.row -= SQUARE_SIDE
    //             console.log(`y: ${ladyPosition.x}`)
    //         }

    //     }
    // }


    // while (ladyPosition.x < target.x) {
    //     ladyPosition.x += SQUARE_SIDE
    //     console.log(`x: ${ladyPosition.x}`)
    // }

    // while (ladyPosition.y < target.y) {
    //     ladyPosition.y += SQUARE_SIDE
    //     console.log(`y: ${ladyPosition.y}`)
    // }

    // while (ladyPosition.x > target.x) {
    //     ladyPosition.x -= SQUARE_SIDE
    //     console.log(`x: ${ladyPosition.x}`)
    // }

    // while (ladyPosition.y > target.y) {
    //     ladyPosition.y -= SQUARE_SIDE
    //     console.log(`y: ${ladyPosition.y}`)
    // }

    // }

    // }
    // }

    // }

    // const catLady = new CatLady(10, 10);

    // console.log(catLady.col, catLady.row)

}