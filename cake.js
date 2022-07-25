class Cake{
  constructor(){
    this.startPoint = 10000;
    this.r = 130;
    this.x = this.startPoint;
    this.y = height/2;
    this.vel = animationSpeed*15;
  }
  show(){
    image(cakeImg, this.x, this.y, this.r, this.r);
  }
  update(){
    this.x = this.x - this.vel;
  }
  check(){
    return this.x + this.r/2 < width/2;
  }
  restart(){
    this.x = this.startPoint;
  }
}