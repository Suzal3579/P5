let sizeOfCube = 400,
    img;

function preload() {
    img = loadImage("olo/fgfg.jpg");
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
    background(250);
    translate(0, 0, sizeOfCube);
    if (sizeOfCube > 100) {
        sizeOfCube -= 10;
    }
    rotateX(frameCount * 0.1);
    rotateY(frameCount * (0.1));
    rotateZ(frameCount * 0.1);
    texture(img);
    box(70, 70, 70);
}