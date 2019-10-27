class setRandomPosition {
    constructor() {
        this.setRandomPosition()
    }

    setRandomPosition() {

        this.col = Math.floor((Math.random() * 10)) * SQUARE_SIDE;
        this.row = Math.floor((Math.random() * 10)) * SQUARE_SIDE;
    }


}