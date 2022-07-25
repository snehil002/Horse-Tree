class RastaMaker{
  constructor(x){
    this.x=x;
    this.y=ground-10;
    this.w=width+100;
    this.h=10;
    this.vel=animationSpeed*17;
  }
  show(){
    image(rastaImg, this.x, this.y, this.w, this.h);
  }
  offScreen() {
    return this.x <= -this.w;
  }
  update(){
    this.x = this.x - this.vel;
  }
}