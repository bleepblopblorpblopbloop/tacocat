let tacocat;
let beer;
let ryeAndCoke;
let martini;
let pizza;

function preload() {
    player.preload();
    glasses.preload();
    catLady.preload();
}

function keyPressed() {
    player.keyPressed();
}


const game = new Game();
const glasses = new Glasses();
let catLady = new CatLady();


function setup() {
    let canvas = createCanvas(WIDTH, WIDTH);
    canvas.parent("canvas");

    setInterval(catLady.distanceCheck, 600)
}



function draw() {
    game.drawGrid();
    game.drawTable();

    player.draw();

    if (glasses.col === player.col && glasses.row === player.row) {
        glasses.keyPressed();
    }


    glasses.drawGlasses();


    catLady.drawCatLady();
    console.log(catLady.drawCatLady())

    // this ensures that the drink and the catLady do not end up in the same position
    if (catLady.col === glasses.col && catLady.row === glasses.row) {
        glasses.setRandomPosition(1, 8);
    }

    // this ensures that the player and catLady  can never occupy the same position
    if (catLady.col === player.col && catLady.row === player.row) {
        catLady.setRandomPosition(1, 8);
    }
}