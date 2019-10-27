let side = WIDTH / 10;

class Player {
    constructor(col, row) {
        this.col = col;
        this.row = row;
        this.img;
    }

    moveDown() {
        if (this.row < (WIDTH - (WIDTH * 0.1))) {
            this.row += side;
            console.log(this.col)
        }
    }

    moveUp() {
        if (this.row > 0) {
            this.row -= side;
            console.log(this.col)

        }
    }

    moveLeft() {
        if (this.col < HEIGHT && this.col >= (HEIGHT * 0.1)) {
            this.col -= side;
        }
    }

    moveRight() {
        if (this.col < (HEIGHT - (HEIGHT * 0.1))) {
            this.col += side;
        }
    }
    preload() {
        this.img = loadImage("../assets/tacocat.png")
    }

    draw() {
        image(this.img, this.col, this.row, (HEIGHT * 0.1), (WIDTH * 0.1))
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