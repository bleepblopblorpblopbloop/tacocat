let tacocat;
let beer;
let ryeAndCoke;
let martini;
let spaceBackground;
let song;
let ariba;
let sadTrombone;
let andalay;

// preloads the different elements of the game that require an image
function preload() {
    player.preload();
    glasses.preload();
    glasses2.preload();
    glasses3.preload();
    catLady.preload();
    game.preload();
    song = loadSound('../assets/mariachiFull.m4a');
    ariba = loadSound('../assets/Arriba.mov');
    sadTrombone = loadSound('../assets/sad-trombone.wav');
    andalay = loadSound('../assets/andalay.mov')
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

    // builds the canvas to a certain size
    let canvas = createCanvas(window.innerWidth, window.innerHeight);

    // background(255, 0, 200);
    canvas.parent("canvas");

    // moves the catLady at a set speed
    setInterval(catLady.catLadyMover, 600)

    // sets the time interval for the games countdown timer
    setInterval(timeIt, 1000);

    textFont("PressStart2P-Regular");

    song.setVolume(0.1)
    song.play();

}


// records the game score
let counter = 0;
// sets the number of seconds that the countdown timer for gameplay will run
let timerValue = 30;
// changes the value of the game timer
function timeIt() {
    if (timerValue > 0) {
        timerValue--;
    }
}



// the is the draw funtion, it runs at 60frames/second
function draw() {

    game.drawGrid();
    game.drawTable();
    player.draw();
    game.drawScoreboardAndTimer();
    game.drawScoreAndTimerText();


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


    // if the drink leaves the table a new drink is generated
    if (glasses.col <= 79 || glasses.col >= 720 || glasses.row <= 79 || glasses.row >= 720) {
        glasses.setRandomPosition(1, 8);
        ariba.setVolume(1);
        ariba.play();
        counter += 100;
    } else if (glasses2.col <= 79 || glasses2.col >= 720 || glasses2.row <= 79 || glasses2.row >= 720) {
        glasses2.setRandomPosition(1, 8);
        ariba.setVolume(1);
        ariba.play();
        counter += 100;
    } else if (glasses3.col <= 79 || glasses3.col >= 720 || glasses3.row <= 79 || glasses3.row >= 720) {
        glasses3.setRandomPosition(1, 8);
        ariba.setVolume(1);
        ariba.play();
        counter += 100;
    }


    // draws the catLady
    catLady.drawCatLady();
    catLady.distanceCheck()


    // this ensures that the drink and the catLady do not end up in the same position
    if (catLady.col === glasses.col && catLady.row === glasses.row) {
        sadTrombone.setVolume(1);
        sadTrombone.play();
        glasses.setRandomPosition(1, 8);
        counter -= 100;
    } else if (catLady.col === glasses2.col && catLady.row === glasses2.row) {
        sadTrombone.setVolume(1);
        sadTrombone.play();
        glasses2.setRandomPosition(1, 8);
        counter -= 100;
    } else if (catLady.col === glasses3.col && catLady.row === glasses3.row) {
        sadTrombone.setVolume(1);
        sadTrombone.play();
        glasses3.setRandomPosition(1, 8);
        counter -= 100;
    }


    // this ensures that if the player and catLady occupy the same position the catLady is "scratched" and moved backwards two spaces
    if (catLady.col === player.col && catLady.row === player.row) {
        if (catLady.movementArr[0] === 'right') {
            andalay.setVolume(1);
            andalay.play();
            catLady.row += (SQUARE_SIDE * 2);
            catLady.col += (SQUARE_SIDE);
        } else if (catLady.movementArr[0] === 'down') {
            andalay.setVolume(1);
            andalay.play();
            catLady.col += (SQUARE_SIDE * 2);
            catLady.row += (SQUARE_SIDE);
        } else if (catLady.movementArr[0] === 'left') {
            andalay.setVolume(1);
            andalay.play();
            catLady.row -= (SQUARE_SIDE * 2);
            catLady.col -= (SQUARE_SIDE);
        } else if (catLady.movementArr[0] === 'up') {
            andalay.setVolume(1);
            andalay.play();
            catLady.col -= (SQUARE_SIDE * 2);
            catLady.row -= (SQUARE_SIDE);
        }

    }


    // the ends the game once the timer reaches 0
    if (timerValue == 0) {
        game.drawGameOver()
        game.drawStartButton()
        // allows you to reset the game and play again
        if (keyPressed('ENTER')) {
            setup();
        }
        noLoop()
    }

}