let tacocat;
let beer;
let ryeAndCoke;
let martini;
let pizza;

// preloads the different elements of the game that require an image
function preload() {
    player.preload();
    glasses.preload();
    glasses2.preload();
    glasses3.preload();
    catLady.preload();
}

// recognizes the keys being pressed in order to direct tacocat
function keyPressed() {
    player.keyPressed();
}

// generates a new game to start the game
const game = new Game();

// generates new glasses of the type specified to start the game
const glasses = new Glasses('matini');
const glasses2 = new Glasses('beermug');
const glasses3 = new Glasses('rye_and_coke');

// generates a new catLady to start the game
let catLady = new CatLady();


function setup() {
    let canvas = createCanvas(WIDTH, WIDTH);
    canvas.parent("canvas");

    setInterval(catLady.catLadyMover, 600)
}

// records the game score
let counter = 0;


// the is the draw funtion, it runs at 60frames/second
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
        glasses2.keyPressed();
    } else if (glasses.col === glasses3.col && glasses.row === glasses3.row) {
        glasses3.keyPressed();
    } else if (glasses2.col === glasses3.col && glasses2.row === glasses3.row) {
        glasses3.keyPressed();
    }

    // this ensures that if the different glasses are pushed into each other by tacocat the stationary glass will be pushed along with the other
    if (glasses.col === glasses2.col && glasses.row === glasses2.row /*&& player.keyPressed() === true*/ ) {

        if (glasses.movementArr[0] === 'right') {
            glasses.row.keyPressed();
        } else if (glasses.movementArr[0] === 'down') {
            glasses.col.keyPressed();
        } else if (glasses.movementArr[0] === 'left') {
            glasses.row.keyPressed();
        } else if (glasses.movementArr[0] === 'up') {
            glasses.col.keyPressed();
        }

    } else if (glasses.col === glasses3.col && glasses.row === glasses3.row /* && player.keyPressed() === true*/ ) {
        if (glasses.movementArr[0] === 'right') {
            glasses.row.keyPressed();
        } else if (glasses.movementArr[0] === 'down') {
            glasses.col.keyPressed();
        } else if (glasses.movementArr[0] === 'left') {
            glasses.row.keyPressed();
        } else if (glasses.movementArr[0] === 'up') {
            glasses.col.keyPressed();
        }

    } else if (glasses2.col === glasses3.col && glasses2.row === glasses3.row /* && player.keyPressed() === true*/ ) {
        if (glasses2.movementArr[0] === 'right') {
            glasses2.row.keyPressed();
        } else if (glasses2.movementArr[0] === 'down') {
            glasses2.col.keyPressed();
        } else if (glasses2.movementArr[0] === 'left') {
            glasses2.row.keyPressed();
        } else if (glasses2.movementArr[0] === 'up') {
            glasses2.col.keyPressed();
        }

    } else if (glasses2.col === glasses.col && glasses2.row === glasses.row /* && player.keyPressed() === true*/ ) {
        if (glasses2.movementArr[0] === 'right') {
            glasses2.row.keyPressed();
        } else if (glasses2.movementArr[0] === 'down') {
            glasses2.col.keyPressed();
        } else if (glasses2.movementArr[0] === 'left') {
            glasses2.row.keyPressed();
        } else if (glasses2.movementArr[0] === 'up') {
            glasses2.col.keyPressed();
        }

    } else if (glasses3.col === glasses.col && glasses3.row === glasses.row /* && player.keyPressed() === true*/ ) {
        if (glasses3.movementArr[0] === 'right') {
            glasses3.row.keyPressed();
        } else if (glasses3.movementArr[0] === 'down') {
            glasses3.col.keyPressed();
        } else if (glasses3.movementArr[0] === 'left') {
            glasses3.row.keyPressed();
        } else if (glasses3.movementArr[0] === 'up') {
            glasses3.col.keyPressed();
        }

    } else if (glasses3.col === glasses2.col && glasses3.row === glasses2.row /* && player.keyPressed() === true*/ ) {
        if (glasses3.movementArr[0] === 'right') {
            glasses3.row.keyPressed();
        } else if (glasses3.movementArr[0] === 'down') {
            glasses3.col.keyPressed();
        } else if (glasses3.movementArr[0] === 'left') {
            glasses3.row.keyPressed();
        } else if (glasses3.movementArr[0] === 'up') {
            glasses3.col.keyPressed();
        }
    }

    // draws the catLady
    catLady.drawCatLady();
    catLady.distanceCheck()

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


    // this ensures that if the player and catLady occupy the same position the catLady is "scratched" and moved backwards two spaces
    if (catLady.col === player.col && catLady.row === player.row) {
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