var ball;
var pipe;
var pipes=[];
var bg;
var a=window.width;
var b=window.height;
var stopped=false;
var count1=0;
var pointSound;
var scoreSound;
function preload() {
     pointSound = loadSound('Comedy effect backwards drip.wav');
    scoreSound = loadSound('Comedy effect clang.wav');
  myFont = loadFont('Comic-ink.ttf');

}

function setup() {
     
    
    // put setup code here
    bg = loadImage("space.png");
    
 
    var cnv= createCanvas (windowWidth,windowHeight);

    
  
     background(bg); 
  ball=new Ball();
  pipes.push(new Pipe());


}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function draw() {
    

   background(bg);
         textFont(myFont);
        textAlign(CENTER);
        fill('rgba(32, 32, 33,0.5)');
      textSize(40);
      noStroke();
    text("Press Spacebar",windowWidth/2,windowHeight/2);
       if(stopped==true)
    {
        textFont(myFont);
        fill('rgb(62, 69, 71)');
        textAlign(CENTER);
      textSize(24);
    text("Click to resume",windowWidth/2,windowHeight/2+180);
    }
    if(stopped==false)
    {     

          if(pipes.length==0)
   {    
       push();
        
       textFont(myFont);
        fill('rgb(209, 82, 20)');
        noStroke();
        textAlign(CENTER);
      textSize(30);
      scoreSound.play();
      
        text("GAME OVER",windowWidth/2,windowHeight/2-200);
        if(count1==0)
        {
         fill('rgb(209, 82, 20)');
        noStroke();
        textAlign(CENTER);
      textSize(30);
      text(" SCORE : "+count1,windowWidth/2,windowHeight/2-100);   
        }
        else
        {   textFont(myFont);
            fill('rgb(209, 82, 20)');
        noStroke();
        textAlign(CENTER);
      textSize(30);
      text(" SCORE : "+(count1-1),windowWidth/2,windowHeight/2-100);
      textFont(myFont);
        count1=0;
          fill(62, 69, 71);
          noStroke();
           textAlign(CENTER);
    textSize(30);
    text("Click to resume",windowWidth/2,windowHeight/2+180);
    pop();

            
        }
                
   }
   else
   {   
            textFont(myFont); 
           fill('rgba(62, 69, 71,0.4)');
            noStroke();
            textAlign(CENTER);
          textSize(30);
          text(" SCORE : "+count1,windowWidth/2,windowHeight/2-100);
         textAlign(CENTER);
      textSize(30);
    text("Esc to pause",windowWidth/2,windowHeight/2+180);
   }
   
    }
    ball.SHOW();
    ball.UPDATE();
    if(frameCount%100===0)
    {
      pipes.push(new Pipe());
    }
    for(var i=pipes.length-1;i>=0;i--)
    {  
        if(pipes.length!=0)
      {
      pipes[i].SHOW();
      pipes[i].SPEED();
    
      if(pipes[i].offscreen()){
        pipes.splice(i,1);

      }
      console.log(windowWidth/2);
      console.log(pipes[i].x);
    
    if(pipes[i].x==ball.x)
      {
          pointSound.play();
            console.log(ball.x);
             console.log(pipes[i].x);
             console.log(windowWidth);
          count1=count1+1;
          fill('rgba(209, 82, 20,0.4)');
            noStroke();
            textAlign(CENTER);
          textSize(30);
          text(" SCORE : "+(i+1),windowWidth/2,windowHeight/2-100);
      }
    
      
        if(pipes[i].hits(ball))
      {
          ball.y=windowHeight/2+90;
      //  console.log("hit");
        noLoop();
    
      push();
        
      pipes.length=[];
      
        redraw();
      pop();
      
        
      }
      }
    }

}

  function mouseReleased()
{
    stopped=false;
  loop();
   
}


function keyPressed(){  
  if(key ==' ')
  {
  

     ball.UP();
  }
  if(keyCode ==27)
  {
      stopped=true;
      
    
  noLoop();
  

  }
  
}