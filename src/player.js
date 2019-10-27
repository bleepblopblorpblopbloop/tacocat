let side = 80;

class Player {
    constructor(col, row) {
        this.col = col;
        this.row = row;
        this.img;
    }

    moveDown() {
        if (this.row < 720) {
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
        if (this.col < 800 && this.col >= 80) {
            this.col -= side;
        }
    }

    moveRight() {
        if (this.col < 720) {
            this.col += side;
        }
    }
    preload() {
        this.img = loadImage("../assets/tacocat.png")
    }

    draw() {
        image(this.img, this.col, this.row, 80, 80)
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