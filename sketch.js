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

let pressSpaceBarColor = '#2b3363';
let backgroundColor = '#364f6b';
let ballColor = '#fc5185';
let fontColor = '#43dde6';
let pipeColor = '#f0f0f0';
function showText(display_text,font_size,color,style,position){
    textAlign(CENTER);
    textSize(font_size);
    textStyle(style);
    noStroke();
    fill(color)
    textFont('Montserrat');
    text(display_text, windowWidth / 5, windowHeight / 2 + position);
}

function showLogo(display_text,font_size,color,style,position){
    textSize(font_size);
    textStyle(style);
    noStroke();
    fill(color)
    textFont('Montserrat');
    text(display_text, windowWidth / 12, windowHeight / 17 + position);
}


function preload() { 
    
    
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    ball = new Ball();
    pipes.push(new Pipe());
    
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(backgroundColor);
    ball.UPDATE();
    ball.SHOW();
    showLogo('FLAPPY',20,fontColor,'BOLD',0);
    showText('PRESS SPACEBAR',25,fontColor,'BOLD',150);

    if (true == stopped) {
        showText('CLICK TO RESUME',25,fontColor,'NORMAL',200);
    }
    if (false == stopped) if (0 == pipes.length) {
        push();
        
        if (0 == count1) {
            showText(' SCORE : '+(count1),50,ballColor,'BOLD',0);
        } else {
            showText(' SCORE : '+(count1),50,ballColor,'BOLD',0);
            count1 = 0;
            showText(' CLICK TO RESUME ',25,fontColor,'BOLD',200);
            pop();
        }
    } else {
        showText(' SCORE : ' +(count1),50,ballColor,'BOLD',0);
        showText(' ESC TO PAUSE ',25,fontColor,'BOLD',250);
    }

    if (frameCount % 100 === 0) pipes.push(new Pipe());
    for (var a = pipes.length - 1; a >= 0; a--) if (0 != pipes.length) {
        pipes[a].SHOW();
        pipes[a].SPEED();
        if (pipes[a].offscreen()) pipes.splice(a, 1);
        if (pipes[a].x == ball.x) {
            count1 += 1;
            showText(' SCORE : '+(count1),50,ballColor,'BOLD',0);
        }
        if (pipes[a].hits(ball)) {
            ball.y = windowHeight / 2 + 90;
            noLoop();
            // push();
            showText('GAME OVER',70,fontColor,'BOLD',-100);
            pipes.length = [];
            redraw();
            showText(' SCORE : '+(count1),50,ballColor,'BOLD',0);
            // pop();
        }
    }
}


function keyPressed() {
    if (" " == key) {
        ball.UP();
        stopped = false;
        loop();
    }
    if (27 == keyCode) {
        stopped = true;
        noLoop();
    }
}