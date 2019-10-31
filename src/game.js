class Game {

  // preloads the background image
  preload() {
    this.spaceBackground = loadImage("assets/spaceBackground.png");
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

    // once there is 9 seconds remaining the timer color changes to red 
    if (timerValue <= 9) {
      textSize(300);
      fill("red");
      textStyle(BOLD);
      text(`${timerValue}`, 968, 500);
    }

    // visualizes the player score (counter) on the screen
    pop();
    textSize(100);
    textStyle(BOLD);
    textFont("Arial", "BOLD");
    text(`Score: ${counter}`, 870, 180);
  }

  // when the timer reaches zero this visualizes a game over message
  drawGameOver() {
    textSize(120);
    textStyle(BOLD);
    textFont("Arial", "BOLD");
    fill("white");
    text("GAME OVER", 770, 640);
  }

  // this is the rectangle container for the 'play again' message
  drawStartButton() {
    push();
    noFill();
    stroke(255, 255, 255);
    strokeWeight(5);
    rect(930, 780, 445, 110, 20);
    pop();

    // this visualizes a message to "Press Enter" if you want to play again
    textSize(60);
    textStyle(BOLD);
    textFont("Arial", "BOLD");
    fill("white");
    text("PRESS ENTER", 940, 855);
    fill("white");
    text("TO PLAY AGAIN", 915, 740);
  }

}