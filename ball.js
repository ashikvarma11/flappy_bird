function Ball() {
	this.y = windowHeight / 2;
	this.x = windowWidth / 2;
	this.gravity = 1;
	this.velocity = 0;
	this.lift = 5;
	this.angle = 0.1;
	this.crctpos;
	this.SHOW = function () {
		let ballColor = '#fc5185';
		this.crctpos = (windowWidth - this.x) % 4;
		if (this.crctpos != 0) {
			this.x = this.x + this.crctpos;
		}

		this.angle += 0.2;
		fill(ballColor);
		push();
		translate(this.x + 22, this.y + 22);

		rotate(this.angle);
		rect(-22, -22, 40, 40);

		rotate(this.angle);


		pop();


	}
	this.UPDATE = function () {
		this.velocity += this.gravity;
		this.y += this.velocity;
		this.velocity *= 0.97;
		if (this.y + 55 > window.height) {
			this.y = window.height - 55;
			this.velocity = 0;

		}
		if (this.y < 0) {
			this.y = 0;
			this.velocity = 0;

		}
	}
	this.UP = function () {
		this.velocity += -this.lift * 4;
	}

}