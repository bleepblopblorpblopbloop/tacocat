// this adds a grid to the board
// push()
// strokeWeight(4)
// for (let i = 0; i < 800; i += 80) {
//     line(i + 80, 0, i + 80, 800);
//     line(0, i + 80, 800, i + 80)
// }
// pop()



// ****THIS ONE WORKS WHEN PLACED IN MAIN.JS - it just doesn't move thepicture but the character actually moves accorduing to the math
// // determines the distance between the catlady and the drink

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

// subtract (= difference vector)
// let dx = target.x - ladyPosition.x;
//let dy = target.y - ladyPosition.y;


// while (ladyPosition.x < target.x) {
//     ladyPosition.x += 80
//     console.log(`x: ${ladyPosition.x}`)
// }

// while (ladyPosition.y < target.y) {
//     ladyPosition.y += 80
//     console.log(`y: ${ladyPosition.y}`)
// }

// while (ladyPosition.x > target.x) {
//     ladyPosition.x -= 80
//     console.log(`x: ${ladyPosition.x}`)
// }

// while (ladyPosition.y > target.y) {
//     ladyPosition.y -= 80
//     console.log(`y: ${ladyPosition.y}`)
// }
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