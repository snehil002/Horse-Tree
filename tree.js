class Tree {
  constructor(x) {
    this.h = random(treeHeight, treeHeight+10);
    this.x = x;
    this.y = ground - this.h;
    this.w = random(treeWidth, treeWidth+10);
    this.animSpeed = animationSpeed * 18;
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