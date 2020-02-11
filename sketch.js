var ball;

var pipe;

var pipes = [];

var bg;

var a = window.width;

var b = window.height;

var stopped = false;

var count1 = 0;

var pointSound;

var scoreSound;

var fontColor = "rgb(187, 193, 201)"

function preload() {}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(200);
    ball = new Ball();
    pipes.push(new Pipe());
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0);
    ball.UPDATE();
    ball.SHOW();
    textAlign(CENTER);
    fill("rgba(32, 32, 33,0.5)");
    textSize(40);
    noStroke();
    text("Press Spacebar", windowWidth / 2, windowHeight / 2);
    if (true == stopped) {
        fill(fontColor);
        textAlign(CENTER);
        textSize(30);
        text("Click to resume", windowWidth / 2, windowHeight / 2 + 180);
    }
    if (false == stopped) if (0 == pipes.length) {
        push();
        fill(fontColor);
        noStroke();
        textAlign(CENTER);
        textSize(30);
        text("GAME OVER", windowWidth / 2, windowHeight / 2 - 200);
        if (0 == count1) {
            fill(fontColor);
            noStroke();
            textAlign(CENTER);
            textSize(30);
            text(" SCORE : " + count1, windowWidth / 2, windowHeight / 2 - 100);
        } else {
            fill(fontColor);
            noStroke();
            textAlign(CENTER);
            textSize(30);
            text(" SCORE : " + (count1 - 1), windowWidth / 2, windowHeight / 2 - 100);
            count1 = 0;
            fill(62, 69, 71);
            noStroke();
            textAlign(CENTER);
            textSize(30);
            text("Click to resume", windowWidth / 2, windowHeight / 2 + 180);
            pop();
        }
    } else {
        fill(fontColor);
        noStroke();
        textAlign(CENTER);
        textSize(30);
        text(" SCORE : " + count1, windowWidth / 2, windowHeight / 2 - 100);
        textAlign(CENTER);
        textSize(30);
        text("Esc to pause", windowWidth / 2, windowHeight / 2 + 180);
    }
   
    if (frameCount % 100 === 0) pipes.push(new Pipe());
    for (var a = pipes.length - 1; a >= 0; a--) if (0 != pipes.length) {
        pipes[a].SHOW();
        pipes[a].SPEED();
        if (pipes[a].offscreen()) pipes.splice(a, 1);
        if (pipes[a].x == ball.x) {
            count1 += 1;
            fill(fontColor);
            noStroke();
            textAlign(CENTER);
            textSize(30);
            text(" SCORE : " + (a + 1), windowWidth / 2, windowHeight / 2 - 100);
        }
        if (pipes[a].hits(ball)) {
            ball.y = windowHeight / 2 + 90;
            noLoop();
            // push();
            pipes.length = [];
            redraw();
            fill(fontColor);
            noStroke();
            textAlign(CENTER);
            textSize(30);
            text("Click to restart", windowWidth / 2, windowHeight / 2 + 280);
            // pop();
        }
    }
}

function mouseReleased() {
    stopped = false;
    loop();
}

function keyPressed() {
    if (" " == key) ball.UP();
    if (27 == keyCode) {
        stopped = true;
        noLoop();
    }
}