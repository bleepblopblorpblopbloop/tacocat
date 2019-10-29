class CatLady {
    constructor(col, row) {
        // this sets a random position within a pre-defined range - allows us to have the lady appear inside the edge of the table
        this.setRandomPosition(1, 8)
    }

    // this sets the initial position of the catLady
    setRandomPosition(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        this.col = Math.floor((Math.random() * (max - min + 1)) + min) * (SQUARE_SIDE);
        this.row = Math.floor((Math.random() * (max - min + 1)) + min) * (SQUARE_SIDE);
    }


    //       // Function to generate random number  
    //     function randomNumber(min, max) {  
    //     min = Math.ceil(min); 
    //     max = Math.floor(max); 
    //     return Math.floor(Math.random() * (max - min + 1)) + min; 
    // }  

    // document.write("Random Number between 1 and 10: ")


    // this preloads the catLady image
    preload() {
        this.catLady = loadImage("../assets/catLady.png")
    }

    // positions the catLady on the grid
    drawCatLady() {
        image(this.catLady, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE)

    }

    distanceCheck = () => {
        if (this.col < glasses.col) {
            this.col += SQUARE_SIDE
            console.log(`x: ${this.col}`)
        } else if (this.row < glasses.row) {
            this.row += SQUARE_SIDE
            console.log(`y: ${this.row}`)
        } else if (this.col > glasses.col) {
            this.col -= SQUARE_SIDE
            console.log(`x: ${this.col}`)
        } else if (this.row > glasses.row) {
            this.row -= SQUARE_SIDE
            console.log(`y: ${this.row}`)
        }

    }


}