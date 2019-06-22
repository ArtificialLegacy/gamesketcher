let userEditingLink = null;

class Link {
  constructor(point1, con1, point2, con2) {
    this.point1 = point1;
    this.con1 = con1;
    this.point2 = point2;
    this.con2 = con2;
    this.col = "#000000";
  }
  edit(l){
    let p1 = nodes[this.point1];
    let p2 = nodes[this.point2];
    
    let x;
    let y;
    
    let x2;
    let y2;

    let ax = cam.x - p1.x;
    let ay = cam.y - p1.y;
    
    let ax2 = cam.x - p2.x;
    let ay2 = cam.y - p2.y;

    switch (this.con1) {
      case 1:
        x = p1.w / 2 + ax;
        y = -5 + ay;

      break;
      case 2:
        x = p1.w / 2 + ax;
        y = p1.h + 5 + ay;

      break;
      case 3:
        x = -5 + ax;
        y = p1.h / 2 + ay;

      break;
      case 4:
        x = p1.w + 5 + ax;
        y = p1.h / 2 + ay;

      break;
    }

    switch (this.con2) {
      case 1:
        x2 = p2.w / 2 + ax2;
        y2 = -5 + ay2;

      break;
      case 2:
        x2 = p2.w / 2 + ax2;
        y2 = p2.h + 5 + ay2;

      break;
      case 3:
        x2 = -5 + ax2;
        y2 = p2.h / 2 + ay2;

      break;
      case 4:
        x2 = p2.w + 5 + ax2;
        y2 = p2.h / 2 + ay2;

      break;
    }
    
    let circ = {
      radius: 4,
      center: {
        x: mouseX - nx,
        y: mouseY - ny,
      },
    };
    let ln = {
      p1: {
        x,
        y,
      },
      p2: {
        x: x2,
        y: y2,
      }
    };
    let ch = interceptCircleLineSeg(circ, ln);
    if(ch.length !== 0){
      menuOpen = "editLink";
      userEditingLink = l;
      scriptIn.hide();
      
      linkColorEdit.position(wind.w / 4 + 55, wind.h / 4 + 5);
      
      linkColorEdit.value(this.col);
    }
  }
  draw() {
    nodeCanvas.fill(this.col);
    nodeCanvas.stroke(this.col);
    nodeCanvas.strokeWeight(2);

    let p1 = nodes[this.point1];
    let p2 = nodes[this.point2];
    
    let x;
    let y;
    
    let x2;
    let y2;

    let ax = cam.x - p1.x;
    let ay = cam.y - p1.y;
    
    let ax2 = cam.x - p2.x;
    let ay2 = cam.y - p2.y;

    switch (this.con1) {
      case 1:
        x = p1.w / 2 + ax;
        y = -5 + ay;

      break;
      case 2:
        x = p1.w / 2 + ax;
        y = p1.h + 5 + ay;

      break;
      case 3:
        x = -5 + ax;
        y = p1.h / 2 + ay;

      break;
      case 4:
        x = p1.w + 5 + ax;
        y = p1.h / 2 + ay;

      break;
    }

    switch (this.con2) {
      case 1:
        x2 = p2.w / 2 + ax2;
        y2 = -5 + ay2;

      break;
      case 2:
        x2 = p2.w / 2 + ax2;
        y2 = p2.h + 5 + ay2;

      break;
      case 3:
        x2 = -5 + ax2;
        y2 = p2.h / 2 + ay2;

      break;
      case 4:
        x2 = p2.w + 5 + ax2;
        y2 = p2.h / 2 + ay2;

      break;
    }

    nodeCanvas.line(x, y, x2, y2);
  }
}

class HalfLink {
  constructor(point, con){
    this.point = point;
    this.con = con;
  }
  
  draw(){
    
    nodeCanvas.fill(0);
    nodeCanvas.stroke(0);
    nodeCanvas.strokeWeight(2);

    let p1 = nodes[this.point];
    
    let x;
    let y;
    

    let ax = cam.x - p1.x;
    let ay = cam.y - p1.y;

    switch (this.con) {
      case 1:
        x = p1.w / 2 + ax;
        y = -5 + ay;

      break;
      case 2:
        x = p1.w / 2 + ax;
        y = p1.h + 5 + ay;

      break;
      case 3:
        x = -5 + ax;
        y = p1.h / 2 + ay;

      break;
      case 4:
        x = p1.w + 5 + ax;
        y = p1.h / 2 + ay;

      break;
    }
    
    nodeCanvas.line(x, y, mouseX - nx, mouseY - ny);
  }
}
