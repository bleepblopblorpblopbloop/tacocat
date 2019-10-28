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
const catLady = new CatLady();

function setup() {
    let canvas = createCanvas(WIDTH, WIDTH);
    canvas.parent("canvas");
}

// glasses.setRandomPosition();
catLady.setRandomPosition();

// ***this appears to do nothing at all***
// if (glasses.col === player.col) {
//     glasses.setRandomPosition()
// }

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
        catLady.setRandomPosition();
    }

    // this ensures that the player and catLady  can never occupy the same position
    if (catLady.col === player.col && catLady.row === player.row) {
        catLady.setRandomPosition();
    }
}


// // determines the distance between the catlady and the drink

function distanceCheck() {
    // drink position
    let target = {
        x: 80,
        y: 80,
    };

    // mycatLady position
    let ladyPosition = {
        x: 320,
        y: 160
    };

    // subtract (= difference vector)
    let dx = target.x - ladyPosition.x;
    //let dy = target.y - ladyPosition.y;


    while (ladyPosition.x < target.x) {
        ladyPosition.x += 80
        console.log(ladyPosition.x)
    }

    while (ladyPosition.y < target.y) {
        ladyPosition.y += 80
        console.log(ladyPosition.y)
    }

    while (ladyPosition.x > target.x) {
        ladyPosition.x -= 80
        console.log(ladyPosition.x)
    }

    while (ladyPosition.y > target.y) {
        ladyPosition.y -= 80
        console.log(ladyPosition.y)
    }
    // normalize (= direction vector)
    // // (a direction vector has a length of 1)
    // let length = Math.sqrt(dx * dx + dy * dy);
    // if (length) {
    //     dx /= length;
    //     dy /= length;
    // }

    // move
    // delta is the elapsed time in seconds
    // SPEED is the speed in units per second (UPS)
    // ladyPosition.x += dx
    // ladyPosition.y += dy
    // console.log(ladyPosition.x)


}


distanceCheck()

// function distanceCheck() {

//     let distance = 0;

//     if ((glasses.row, glasses.col) !== (catlady.row, catlady.col)) {
//         distance += (catlady.row - glasses.row) + (catlady.col - glasses.col);
//         return distance;
//     }
//     console.log(distance);
// }


// creates the distnce function
// const distance = (a, b) => {
//     return Math.sqrt((a.position[0] - b.position[0]) ** 2 + (a.position[1] - b.position[1]) ** 2)
// }