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
// if (glasses.col === player.col) {
//     glasses.setRandomPosition()
// }




function draw() {

    game.drawGrid();

    player.draw();


    if (glasses.col === player.col && glasses.row === player.row) {
        glasses.setRandomPosition();
    }

    glasses.drawGlasses();

    owner.drawOwner();

    // this ensures that the drink and the owner do not end up in the same position
    if (owner.col === glasses.col && owner.row === glasses.row) {
        owner.setRandomPosition();
    }

    // this ensures that the player and owner  can never occupy the same position
    if (owner.col === player.col && owner.row === player.row) {
        owner.setRandomPosition();
    }


}