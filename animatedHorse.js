class AnimatedHorse {
  constructor(animation, r) {
    this.x = 15;
    this.y = ground - r;
    this.vel = 0;

    this.animation = animation;
    this.len = this.animation.length;
    this.animSpeed = animationSpeed;
    this.index = 0;

    this.w = r;
    this.h = r;
  }

  show() {
    if(this.isInAir()){
      image(this.animation[0], this.x, this.y, this.w, this.h);
      
    }else{
      let index = floor(this.index) % this.len;
      image(this.animation[index], this.x, this.y, this.w, this.h);
    }
  }

  isInAir(){
    return this.y < ground - this.h;
  }

  animate() {
    this.index += this.animSpeed;
  }
  
  jump(){
    if(this.y == ground - this.h){
      this.vel = -horseYSpeed;
    }
  }
  
  update(){
    this.vel += gravity;
    this.y += this.vel;
    
    if(this.y >= ground - this.h){
      this.y = ground - this.h;
      this.vel = 0;
    }
  }
  restart(){
    this.y = ground - this.h;
    this.vel = 0;
  }
}