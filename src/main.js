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

let counter = 0;

function draw() {
    game.drawGrid();
    game.drawTable();

    player.draw();

    if (glasses.col === player.col && glasses.row === player.row) {
        glasses.keyPressed();
    }

    glasses.drawGlasses();
    catLady.drawCatLady();


    // this ensures that the drink and the catLady do not end up in the same position
    if (catLady.col === glasses.col && catLady.row === glasses.row) {
        glasses.setRandomPosition(1, 8);
        counter -= 100;
    }


    // this ensures that if the player and catLady occupy the same position the catLadt is "scratched" and moved backwards two spaces
    if (catLady.col === player.col && catLady.row === player.row) {
        // catLady.setRandomPosition(1, 8);
        if (catLady.movementArr[0] === 'right') {
            catLady.col -= (SQUARE_SIDE * 2);
        } else if (catLady.movementArr[0] === 'down') {
            catLady.row -= (SQUARE_SIDE * 2);
        } else if (catLady.movementArr[0] === 'left') {
            catLady.col += (SQUARE_SIDE * 2);
        } else if (catLady.movementArr[0] === 'up') {
            catLady.row += (SQUARE_SIDE * 2);
        }
        console.log(this);
        // catLady.drawCatLady();
    }


    // if the drink leaves the table a new drink is generated
    if (glasses.col <= 79 || glasses.col >= 720 || glasses.row <= 79 || glasses.row >= 720) {
        glasses.setRandomPosition(1, 8);
        counter += 100;
    }


    console.log(counter)
    console.log(catLady.movementArr)
}