class Game {
  preload() {
    // this.tableImage = loadImage("../assets/wood_table.png", 1);
    this.spaceBackground = loadImage("../assets/spaceBackground.png");
    // this.pizzaCat = loadImage("https://media.giphy.com/media/xn9yw4QWUiC2Y/giphy.gif")
    myFont = loadFont("../assets/PressStart2P-Regular.ttf");
  }

  // draws the outer edge of the main grid box/game area
  drawGrid() {
    image(this.spaceBackground, 0, 0, window.innerWidth, window.innerHeight);
  }

  // draws the outer edge of the table
  drawTable() {
    push();
    noFill();
    stroke(255, 255, 255);
    strokeWeight(5)
    rect(WIDTH * 0.1, HEIGHT * 0.1, WIDTH * 0.8, HEIGHT * 0.8, 20)
    pop();
  }

  // draws the score board
  drawScoreboardAndTimer() {

    push();
    noFill();
    stroke(255, 255, 255);
    strokeWeight(5);
    rect(830, 75, 615, 150, 20);
    // rect(1120, 330, 200, 150, 20);
    pop();
  }

  drawScoreAndTimerText() {
    strokeWeight(10);
    textSize(300);
    fill("white");
    text(`${timerValue}`, 968, 500);
    push();
    if (timerValue <= 9) {
      textSize(300);
      fill("red");
      textStyle(BOLD);
      text(`${timerValue}`, 968, 500);
    }
    pop();
    push();
    // if (timerValue <= 0) {
    //   // fill("white");
    //   // image(this.pizzaCat, 1175, 390);
    // }
    pop();
    textSize(100);
    textStyle(BOLD);
    textFont("Arial", "BOLD");
    text(`Score: ${counter}`, 870, 180);
    textSize(100);
    textStyle(BOLD);
    textFont("Arial", "BOLD");
  }


  drawGameOver() {
    textSize(120);
    textStyle(BOLD);
    textFont("Arial", "BOLD");
    fill("white");
    text("GAME OVER", 770, 640);
  }

  drawStartButton() {

    push();
    noFill();
    stroke(255, 255, 255);
    strokeWeight(5);
    rect(930, 780, 445, 110, 20);
    pop();

    textSize(60);
    textStyle(BOLD);
    textFont("Arial", "BOLD");
    fill("white");
    text("PRESS ENTER", 940, 855);
    fill("white");
    text("TO PLAY AGAIN", 915, 740);
  }


}