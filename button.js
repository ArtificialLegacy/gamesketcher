class Button {
  constructor(x, y, w, h, t = false, m = "main", v = true, to = false) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.toolBar = t;
    this.m = m;
    this.visible = v;
    this.toggle = to;
    this.checked = true;
  }
  draw() {
    push();
    if (!this.visible) return;
    strokeWeight(1);
    stroke(0);
    fill(160, 220);
    rect(this.x, this.y, this.w, this.h, 8);
    if (this.check()) {
      if (menuOpen == this.m) {
        if (this.toolBar) {
          let w = this.toolBar.length * 5 + 10;

          fill(0, 80);
          noStroke();
          
          rect(this.x + this.w / 2 - w / 2, this.y - 30, w, 25, 5);

          beginShape();
          vertex(this.x + this.w / 2, this.y);
          vertex(this.x + this.w / 2 - 5, this.y - 5);
          vertex(this.x + this.w / 2 + 5, this.y - 5);
          endShape();

          fill(255);
          textAlign(CENTER);
          textSize(10);
          text(this.toolBar, this.x + this.w / 2, this.y - 14);
        }

        fill(60, 50);
        rect(this.x, this.y, this.w, this.h, 8);
      }
    }
    if(this.toggle && this.checked){
      fill(60, 100);
      rect(this.x, this.y, this.w, this.h, 8);
    }
    pop();
  }
  check() {
    if (!this.visible) return;
    return (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h);
  }
  use(){
    let used = this.check();
    if(used && this.toggle){
      if(!this.checked){
        this.checked = true;
      } else {
        this.checked = false;
      }
    }
    return used;
  }
}
