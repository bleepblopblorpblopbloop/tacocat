class Game {
    drawGrid() {
        strokeWeight(2)
        rect(0, 0, 800, 800)

        push()
        strokeWeight(4)
        for (let i = 0; i < 800; i += 80) {
            line(i + 80, 0, i + 80, 800);
            line(0, i + 80, 800, i + 80)
        }
        pop()

    }
    // samePosition() {
    //   if (treasure.col === player.col && treasure.row === player.row) {
    //     treasure.setRandomPositon();
    //   }
    // }
}