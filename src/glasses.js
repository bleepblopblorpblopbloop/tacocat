class Glasses {
    // constructor(type) {
    constructor(drink) {

        // the defines a drink
        this.drinks = drink;

        // this sets a random position within a pre-defined range - allows us to have the glasses appear inside the edge of the table
        this.setRandomPosition(1, 8);

        this.movementArr = ['start']
    }

    // this seets the intial position of the beer to a random position on the board
    setRandomPosition(min, max) {

        this.col = Math.floor((Math.random() * (max - min + 1)) + min) * (SQUARE_SIDE)
        this.row = Math.floor((Math.random() * (max - min + 1)) + min) * (SQUARE_SIDE)

    }

    // preloads the drink images
    preload() {
        this.img = loadImage(`../assets/${this.drinks}.png`)
    }

    // positions the glass on the grid
    drawGlasses() {
        // console.log(this.img);
        this.img && image(this.img, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE)
    }


    // tells you that the glass is moving to the right
    glassMoveRight() {
        this.col += SQUARE_SIDE;
        this.movementArr.pop()
        this.movementArr.push('right')
    }

    // tells you that the glass is moving down
    glassMoveDown() {
        this.row += SQUARE_SIDE;
        this.movementArr.pop()
        this.movementArr.push('down')
    }

    // tells you that the glass is moving to the left
    glassMoveLeft() {
        this.col -= SQUARE_SIDE;
        this.movementArr.pop()
        this.movementArr.push('left')
    }

    // tells you that the glass is moving up
    glassMoveUp() {
        this.row -= SQUARE_SIDE;
        this.movementArr.pop()
        this.movementArr.push('up')
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