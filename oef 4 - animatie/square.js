class Square {
    constructor(canvas, speed, width) {
        this.xPosition = 0;
        this.yPosition = 0;
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.speed = speed;
        this.width = width;
    }

    Draw() {
        this.ctx.beginPath()
        this.ctx.rect(this.xPosition, this.yPosition, this.width, this.width);
        this.ctx.fillStyle="red";
        this.ctx.fill();
    }

    Move(){
        this.xPosition += this.speed;
        this.yPosition += this.speed;
    }

    CheckBoundaries() {
        if (this.xPosition > this.canvas.width && this.yPosition > this.canvas.height) {
            this.xPosition = 0;
            this.yPosition = 0;
        }
    }
}