let tacocat;
let beer;
let ryeAndCoke;
let martini;
let pizza;
// let owner;


function preload() {
    player.preload()
    glasses.preload()
    owner.preload()
}

function keyPressed() {
    player.keyPressed()
}
const game = new Game();
const glasses = new Glasses();
const owner = new Owner();

function setup() {
    let canvas = createCanvas(WIDTH, WIDTH);
    canvas.parent("canvas");
}


glasses.setRandomPosition()
owner.setRandomPosition()

// ***this appears to do nothing at all***
if (glasses.col === player.col) {
    glasses.setRandomPosition()
}


function draw() {

    game.drawGrid();

    player.draw();

    if (glasses.col === player.col && glasses.row === player.row) {
        glasses.setRandomPosition();
        // owner.setRandomPosition();
    }

    glasses.drawGlasses();

    // if (owner.col === player.col || glasses.col && owner.row === player.row || glasses.row) {
    //     owner.setRandomPosition();
    // }

    owner.drawOwner();
}