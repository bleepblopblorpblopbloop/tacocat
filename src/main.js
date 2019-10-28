let tacocat;
let beer;
let ryeAndCoke;
let martini;
let pizza;
// let catLady;

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
const catLady = new CatLady();

function setup() {
  let canvas = createCanvas(WIDTH, WIDTH);
  canvas.parent("canvas");
}

glasses.setRandomPosition();
catLady.setRandomPosition();

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
