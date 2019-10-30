class Game {

    preload() {
        this.tableImage = loadImage("../assets/wood_table.png", 1)
        this.spaceBackground = loadImage("../assets/spaceBackground.png")
    }

    // draws the outer edge of the main grid box/game area
    drawGrid() {
        image(this.spaceBackground, 0, 0, window.innerWidth, window.innerHeight)
    }

    // draws the outer edge of the table
    drawTable() {
        // strokeWeight(2)
        // rect(0 + (WIDTH * 0.1)), (0 + (HEIGHT * 0.1)), WIDTH * 0.8, HEIGHT * 0.8
        // image(this.tableImage, (0 + (WIDTH * 0.1)), (0 + (HEIGHT * 0.1)), WIDTH * 0.8, HEIGHT * 0.8)
        // imageMode(CENTER);
    }

    // draws the score board
    drawScoreboardAndTimer() {

        strokeWeight(10);
        rect(900, 75, 400, 150, 20)
        rect(950, 300, 300, 150, 20)

    }

    drawScoreAndTimerText() {

        strokeWeight(10);
        text(`${timerValue}`, 1075, 390)
        textSize(60);
        textStyle(BOLD);
        textFont('Roboto BOLD');
        text(`Score: ${counter}`, 970, 165)
        textSize(60);
        textStyle(BOLD);
        textFont('Roboto BOLD');

    }

}