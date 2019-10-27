let img;
let img2;


function preload() {
    // img = loadImage("../assets/tacocat.png")
    player.preload()
    glasses.preload()
}

function keyPressed() {
    player.keyPressed()
}
const game = new Game()
const glasses = new Glasses;

function setup() {
    let canvas = createCanvas(WIDTH, WIDTH);
    canvas.parent("canvas");
}


glasses.setRandomPositon()

if (glasses.col === player.col) {
    glasses.setRandomPositon()
}

function draw() {
    game.drawGrid();
    player.draw();

    if (glasses.col === player.col && glasses.row === player.row) {
        glasses.setRandomPositon();
    }

    glasses.drawGlasses();

}