class Player {
    constructor(col, row) {
        this.setRandomPosition(1, 8);
        // this.col = col;
        // this.row = row;
        this.tacocat;
    }

    // this sets the initial position of our hero, tacocat
    setRandomPosition(min, max) {
        // min = Math.ceil(min);
        // max = Math.floor(max);
        this.col = Math.floor((Math.random() * (max - min + 1)) + min) * (SQUARE_SIDE);
        this.row = Math.floor((Math.random() * (max - min + 1)) + min) * (SQUARE_SIDE);
    }

    // this is the logic that moves the player (tacocat) down
    moveDown() {
        if (this.row < (WIDTH - (WIDTH * 0.1))) {
            this.row += SQUARE_SIDE;
            // console.log(this.col)
        }
    }

    // this is the logic that moves the player (tacocat) up
    moveUp() {
        if (this.row > 0) {
            this.row -= SQUARE_SIDE;
            // console.log(this.col)

        }
    }

    // this is the logic that moves the player (tacocat) to the left
    moveLeft() {
        if (this.col < HEIGHT && this.col >= (HEIGHT * 0.1)) {
            this.col -= SQUARE_SIDE;
        }
    }

    // this is the logic that moves the player (tacocat) to the right
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

    // connects the key pressed to the players directional movement
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

// starts the player at paerticular position 
const player = new Player();

console.log(player.col, player.row);