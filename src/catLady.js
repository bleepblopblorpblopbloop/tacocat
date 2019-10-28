class CatLady {
    constructor() {
        this.setRandomPosition()

    }

    // this sets the initial position of the catLady
    setRandomPosition() {

        this.col = Math.floor((Math.random() * 10)) * SQUARE_SIDE;
        this.row = Math.floor((Math.random() * 10)) * SQUARE_SIDE;
    }


    // this preloads the catLady image
    preload() {
        this.catLady = loadImage("../assets/catLady.png")
    }

    // positions the catLady on the grid
    drawCatLady() {
        image(this.catLady, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE)

        // // determines the distance between the catlady and the drink

        // distanceCheck() {
        //     // drink position
        //     let target = {
        //         x: 320,
        //         y: 160,
        //     };

        //     // mycatLady position
        //     let ladyPosition = {
        //         x: 80,
        //         y: 80
        //     };

        //     // subtract (= difference vector)
        //     //let dx = target.x - ladyPosition.x;
        //     //let dy = target.y - ladyPosition.y;


        //     while (ladyPosition.x < target.x) {
        //         ladyPosition.x += 80
        //         console.log(ladyPosition.x)
        //     }

        //     while (ladyPosition.y < target.y) {
        //         ladyPosition.y += 80
        //         console.log(ladyPosition.y)
        //     }
        //     // normalize (= direction vector)
        //     // // (a direction vector has a length of 1)
        //     // let length = Math.sqrt(dx * dx + dy * dy);
        //     // if (length) {
        //     //     dx /= length;
        //     //     dy /= length;
        //     // }

        //     // move
        //     // delta is the elapsed time in seconds
        //     // SPEED is the speed in units per second (UPS)
        //     // ladyPosition.x += dx
        //     // ladyPosition.y += dy
        //     // console.log(ladyPosition.x)


        // }


    }

}