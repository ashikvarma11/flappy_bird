//var count=0;
function Pipe()
{
        
	this.top=random(height/1.9);
	this.bottom=random(height/1.9);
	this.topThresh=(height/2)-20;
        this.bottomThresh=(height/2)-20;
        this.minThresh=220;
       
	this.x=width;
	this.w=40;
	this.speed=4;
	this.blow=false;
	
	this.SHOW=function()
	{   
       
	 if(this.top>this.topThresh)
    {
    this.top=this.topThresh;
    }
       
     if(this.bottom>this.bottomThresh)
    {
    this.bottom=this.bottomThresh;
    }

		fill(72, 135, 45);
		stroke(72, 135, 45);
			if(this.blow==true)
		{
			fill(255, 0, 0);
			
		}
	if(this.top<this.minThresh)
		{
		    this.top=this.minThresh;
		}
		if(this.bottom<this.minThresh)
		{
		    this.bottom=this.minThresh;
		}
  		rect(this.x,0,this.w,this.top);
		rect(this.x,height-this.bottom,this.w,this.bottom);
	
	}
	this.SPEED=function()
	{
		this.x-=this.speed;
	}
	this.offscreen=function()
	{
		if(this.x<-this.w )
		{
			return true;
		}
		else
		{
			return false;
		}
	}
	this.hits=function(ball)
	{		
			
		if(ball.y<this.top || ball.y>height-this.bottom)
		{	 
			if(ball.x>this.x && ball.x<this.x+this.w)
			{

				this.blow=true;
				// redraw();
			
			
			
				
				return true;
					count=0;

			}
			this.blow=false;
		}
		return false;
	}
}