// let side = WIDTH / 10;
// let moveSpace = WIDTH / 100;

class Player {
    constructor(col, row) {
        this.col = col;
        this.row = row;
        this.tacocat;
    }

    moveDown() {
        if (this.row < (WIDTH - (WIDTH * 0.1))) {
            this.row += SQUARE_SIDE;
            // console.log(this.col)
        }
    }

    moveUp() {
        if (this.row > 0) {
            this.row -= SQUARE_SIDE;
            // console.log(this.col)

        }
    }

    moveLeft() {
        if (this.col < HEIGHT && this.col >= (HEIGHT * 0.1)) {
            this.col -= SQUARE_SIDE;
        }
    }

    moveRight() {
        if (this.col < (HEIGHT - (HEIGHT * 0.1))) {
            this.col += SQUARE_SIDE;
        }
    }

    preload() {
        this.tacocat = loadImage("../assets/tacocat.png")
    }

    // let x = 0;
    // let y = 0;
    // let side = (WIDTH * 0.1);

    draw() {
        image(this.tacocat, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE)

        // // moves x to the left by 1 pixel on every frame that the key is down
        // if (keyIsDown(37) && x > 0) {
        //     x--;
        // } else if (keyIsDown(39) && x < WIDTH - side) {
        //     x++;
        // } else if (keyIsDown(40) && y > 0) {
        //     y++;
        // } else if (keyIsDown(38) && x > HEIGHT - side) {
        //     y--;
        // }

    }

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

const player = new Player(0, 0);

console.log(player.col, player.row);