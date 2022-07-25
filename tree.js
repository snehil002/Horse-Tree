class Tree {
  constructor(x) {
    this.h = 60;
    this.x = x;
    this.y = ground - this.h;
    this.w = random(40,50);
    this.animSpeed = animationSpeed*17;
  }

  update() {
    this.x -= this.animSpeed;
  }

  offScreen() {
    return this.x < -this.w;
  }

  isBehindTheScene() {
    return this.x + this.w > width;
  }

  show() {
   image(treeImg, this.x, this.y, this.w, this.h);
  }
}