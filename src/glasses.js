class Glasses {
    // constructor(type) {
    constructor(drink) {
        // this sets a random position within a pre-defined range - allows us to have the glasses appear inside the edge of the table

        this.drinks = drink;
        // this.positions = [];
        // this.img = []

        this.setRandomPosition(1, 8);
    }

    // this seets the intial position of the beer to a random position on the board
    setRandomPosition(min, max) {


        this.col = Math.floor((Math.random() * (max - min + 1)) + min) * (SQUARE_SIDE)
        this.row = Math.floor((Math.random() * (max - min + 1)) + min) * (SQUARE_SIDE)


    }


    preload() {
        // let randDrink = this.drinks[Math.floor(Math.random() * this.drinks.length)]

        this.img = loadImage(`../assets/${this.drinks}.png`)

        // console.log(randDrink)
        // console.log()
    }

    // positions the glass on the grid
    drawGlasses() {
        console.log(this.img);
        this.img && image(this.img, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE)
    }

    // this moves the glass in the direction of the keyPress
    keyPressed() {
        if (keyCode === 37) {
            this.col -= SQUARE_SIDE
        } else if (keyCode === 39) {
            this.col += SQUARE_SIDE
        } else if (keyCode === 40) {
            this.row += SQUARE_SIDE
        } else if (keyCode === 38) {
            this.row -= SQUARE_SIDE
        }
    }

}