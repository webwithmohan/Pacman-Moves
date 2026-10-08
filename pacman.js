

const pacMen = []; // This array holds all the pacmen

// This function returns an object with random values
function setToRandom(scale) {
    return {
        x: Math.random() * scale,
        y: Math.random() * scale,
    };
}

// Factory to make a PacMan at a random position with random velocity
function makePac() {

    // Random velocity
    let velocity = setToRandom(10);

    // Random position
    let position = setToRandom(100);

    // Create image
    let newimg = document.createElement("img");

    newimg.src = "./images/PacMan1.png";

    // Set image size
    newimg.width = 100;

    // Position image absolutely
    newimg.style.position = "absolute";

    // Set position with px
    newimg.style.left = position.x + "px";
    newimg.style.top = position.y + "px";

    // Add image to game div
    let game = document.getElementById("game");
    game.appendChild(newimg);

    // Return PacMan details
    return {
        position,
        velocity,
        newimg,
    };
}

function update() {

    // Move every PacMan
    pacMen.forEach((item) => {

        checkCollisions(item);

        item.position.x += item.velocity.x;
        item.position.y += item.velocity.y;

        // Update image position
        item.newimg.style.left = item.
        position.x + "px"
        item.newimg.style.top = item.position.y + "px";
    });

    setTimeout(update, 20);
}

function checkCollisions(item) {

    // Check left and right walls
    if (
        item.position.x + item.velocity.x + item.newimg.width >
        window.innerWidth ||
        item.position.x + item.velocity.x < 0
    ) {
        item.velocity.x = -item.velocity.x;
    }

    // Check top and bottom walls
    if (
        item.position.y + item.velocity.y + item.newimg.height >
        window.innerHeight ||
        item.position.y + item.velocity.y < 0
    ) {
        item.velocity.y = -item.velocity.y;
    }
}

function makeOne() {
    pacMen.push(makePac());
}

// Start animation
update();

// Don't change this line
if (typeof module !== "undefined") {
    module.exports = { checkCollisions, update, pacMen };
}