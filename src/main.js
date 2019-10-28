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
    // glasses.keyPressed();
}
const game = new Game();
const glasses = new Glasses();
let catLady = new CatLady(3, 3);

function setup() {
    let canvas = createCanvas(WIDTH, WIDTH);
    canvas.parent("canvas");
}

// glasses.setRandomPosition();
// catLady.setRandomPosition();

// ***this appears to do nothing at all***
// if (glasses.col === player.col) {
//     glasses.setRandomPosition()
// }

function draw() {
    catLady.distanceCheck();

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
        catLady.setRandomPosition();
    }

    // this ensures that the player and catLady  can never occupy the same position
    if (catLady.col === player.col && catLady.row === player.row) {
        catLady.setRandomPosition();
    }
}



// determines the distance between the catlady and the drink

// function distanceCheck() {
//     // drink position
//     let target = {
//         x: glasses.col,
//         y: glasses.row
//     };

//     // mycatLady position
//     let ladyPosition = {
//         x: catLady.col,
//         y: catLady.row
//     };

//     while (catLady.col !== target.x && catLady.row !== target.y) {
//         setInterval(() => {
//             if (catLady.col < target.x) {

//                 catLady.col += SQUARE_SIDE

//                 console.log(`LADY: ${ladyPosition}`)
//             }

//             if (catLady.row < target.y) {
//                 catLady.row += SQUARE_SIDE
//                 console.log(`LADY: ${ladyPosition}`)
//             }

//             if (catLady.col > target.x) {
//                 catLady.col -= SQUARE_SIDE
//                 console.log(`LADY: ${ladyPosition}`)
//             }

//             if (catLady.row > target.y) {
//                 catLady.row -= SQUARE_SIDE
//                 console.log(`LADY: ${ladyPosition}`)
//             }
//         }, 1000)
//     }


// distanceCheck()