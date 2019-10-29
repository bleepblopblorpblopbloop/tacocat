let tacocat;
let beer;
let ryeAndCoke;
let martini;
let pizza;
// const beerGlass = new Glasses();


function preload() {
    player.preload();
    glasses.preload();
    glasses2.preload();
    glasses3.preload();

    catLady.preload();
}

function keyPressed() {
    player.keyPressed();
}


const game = new Game();


const glasses = new Glasses('matini');
const glasses2 = new Glasses('beermug');
const glasses3 = new Glasses('rye_and_coke');


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

    // this allows tacocat to push the drinks
    if (glasses.col === player.col && glasses.row === player.row) {
        glasses.keyPressed();
    } else if (glasses2.col === player.col && glasses2.row === player.row) {
        glasses2.keyPressed();
    } else if (glasses3.col === player.col && glasses3.row === player.row) {
        glasses3.keyPressed();
    }

    // draws the different glasses and catLady on the board
    glasses.drawGlasses();
    glasses2.drawGlasses();
    glasses3.drawGlasses();

    // prevents the different drinks from occupying the same space
    if (glasses.col === glasses2.col && glasses.row === glasses2.row) {
        glasses2.setRandomPosition();
    } else if (glasses.col === glasses3.col && glasses.row === glasses3.row) {
        glasses3.setRandomPosition();
    } else if (glasses2.col === glasses3.col && glasses2.row === glasses3.row) {
        glasses3.setRandomPosition();
    }



    catLady.drawCatLady();


    // this ensures that the drink and the catLady do not end up in the same position
    if (catLady.col === glasses.col && catLady.row === glasses.row) {
        glasses.setRandomPosition(1, 8);
        counter -= 100;
    } else if (catLady.col === glasses2.col && catLady.row === glasses2.row) {
        glasses2.setRandomPosition(1, 8);
        counter -= 100;
    } else if (catLady.col === glasses3.col && catLady.row === glasses3.row) {
        glasses3.setRandomPosition(1, 8);
        counter -= 100;
    }


    // this ensures that if the player and catLady occupy the same position the catLadt is "scratched" and moved backwards two spaces
    if (catLady.col === player.col && catLady.row === player.row) {
        // catLady.setRandomPosition(1, 8);
        if (catLady.movementArr[0] === 'right') {
            catLady.row += (SQUARE_SIDE * 2);
            catLady.col += (SQUARE_SIDE);
        } else if (catLady.movementArr[0] === 'down') {
            catLady.col += (SQUARE_SIDE * 2);
            catLady.row += (SQUARE_SIDE);
        } else if (catLady.movementArr[0] === 'left') {
            catLady.row -= (SQUARE_SIDE * 2);
            catLady.col -= (SQUARE_SIDE);
        } else if (catLady.movementArr[0] === 'up') {
            catLady.col -= (SQUARE_SIDE * 2);
            catLady.row -= (SQUARE_SIDE);
        }

    }


    // if the drink leaves the table a new drink is generated
    if (glasses.col <= 79 || glasses.col >= 720 || glasses.row <= 79 || glasses.row >= 720) {
        glasses.setRandomPosition(1, 8);
        counter += 100;
    } else if (glasses2.col <= 79 || glasses2.col >= 720 || glasses2.row <= 79 || glasses2.row >= 720) {
        glasses2.setRandomPosition(1, 8);
        counter += 100;
    } else if (glasses3.col <= 79 || glasses3.col >= 720 || glasses3.row <= 79 || glasses3.row >= 720) {
        glasses3.setRandomPosition(1, 8);
        counter += 100;
    }


    console.log(counter)
    // console.log(catLady.movementArr)
}