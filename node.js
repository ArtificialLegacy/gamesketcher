let userHasLink = false;
let userDrawLink = 0;
let userHasNode = false;
let userEditingNode = null;

let userSelNode = false;
let userOpenNode = null;

let scriptOpened = false;

let snapToGrid = false;

let showMode = false;

class Node {
  constructor(name, col, bord, type = "Script") {
    this.x = cam.x;
    this.y = cam.y;
    this.w = 80;
    this.h = 40;
    
    this.ix = this.x;
    this.iy = this.y;
    
    this.name = name;
    this.col = col;
    this.bord = bord;
    
    this.type = type;

    this.checked = false;
    
    this.canHov = false;
    
    this.script = null;

    if (this.name.length > 9) {
      this.name = this.name.slice(0, 9);
    }
  }
  select(l){
    if(this.check() && scriptEditorOpen && this.type !== "Label" && this.type !== "Comment"){
      if(userOpenNode == l){
        userSelNode = false;
        userOpenNode = null;
        
        scriptIn.position(-10000, -10000);
      } else {
        userSelNode = true;
        userOpenNode = l;
      
        let w = 0;
        let h = 0;
      
        switch(editorsOpen){
          case 2:
            w = wind.w / 2 - 25;
            h = wind.h - 120;
          break;
          case 3:
            w = wind.w / 3 - 25;
            h = wind.h - 120;
          break;
        }
      
        scriptIn
          .position(15, 100)
          .size(w, h);
      
        scriptIn.value(this.script);
      }
    }
  }
  use(){
    if ((this.check() && !userHasNode) || this.checked) {
      this.checked = true;
      userHasNode = true;
      let camx = 0;
      let camy = 110;
      let camw = 0;
      let camh = wind.h - 85;
      if (nodeEditorOpen) {
        if (editorsOpen == 1) {
          if (nodeEditorOpen) {
            camx = 10;
            camw = wind.w - 20
          }
        } else if (editorsOpen == 2) {
          if (scriptEditorOpen) {
            if (nodeEditorOpen) {
              camx = wind.w / 2;
              camw = wind.w / 2 - 10;
            }
          } else if (nodeEditorOpen) {
            camx = 10;
            camw = wind.w / 2 - 10;
          }
        } else if (editorsOpen == 3) {
          camx = wind.w / 3;
          camw = wind.w / 3;
        }
      }
      if (mouseX > camx && mouseX < camx + camw && mouseY > camy && mouseY < camy + camh) {
        if(snapToGrid){
          
          let g = 20;
          
          let difx = mouseX - oldX;
          let dify = mouseY - oldY;
          
          this.ix -= difx;
          this.iy -= dify;
          
          this.x = floor(this.ix / g) * g;
          this.y = floor(this.iy / g) * g;
        } else {
          let difx = mouseX - oldX;
          let dify = mouseY - oldY;
          this.x -= difx;
          this.y -= dify;
          this.ix = this.x;
          this.iy = this.y;
        }

        oldX = mouseX;
        oldY = mouseY;
      }
      return true;
    }
  }
  link(link) {
    
    if(this.type == "Template" || this.type == "Comment" || this.type == "Note") return;

    if (!userHasLink) {

      let con = 0;

      let camx = 0;
      let camy = 110;
      let camw = 0;
      let camh = wind.h - 85;
      if (nodeEditorOpen) {
        if (editorsOpen == 1) {
          if (nodeEditorOpen) {
            camx = 10;
            camw = wind.w - 20
          }
        } else if (editorsOpen == 2) {
          if (scriptEditorOpen) {
            if (nodeEditorOpen) {
              camx = wind.w / 2;
              camw = wind.w / 2 - 10;
            }
          } else if (nodeEditorOpen) {
            camx = 10;
            camw = wind.w / 2 - 10;
          }
        } else if (editorsOpen == 3) {
          camx = wind.w / 3;
          camw = wind.w / 3;
        }
      }

      let x = camx + cam.x - this.x;
      let y = camy + cam.y - this.y;

      switch (true) {
        case dist(x + this.w / 2, y - 5, mouseX, mouseY) < 5:
          con = 1;

        break;
        case dist(x + this.w / 2, y + this.h + 5, mouseX, mouseY) < 5:
          con = 2;

        break;
        case dist(x - 5, y + this.h / 2, mouseX, mouseY) < 5:
          con = 3;

        break;
        case dist(x + this.w + 5, y + this.h / 2, mouseX, mouseY) < 5:
          con = 4;

        break;
      }

      if (con !== 0) {
        userDrawLink = new HalfLink(link, con);
        userHasLink = true;
        return true;
      }
    } else {
      let con = 0;

      let camx = 0;
      let camy = 110;
      let camw = 0;
      let camh = wind.h - 85;
      if (nodeEditorOpen) {
        if (editorsOpen == 1) {
          if (nodeEditorOpen) {
            camx = 10;
            camw = wind.w - 20
          }
        } else if (editorsOpen == 2) {
          if (scriptEditorOpen) {
            if (nodeEditorOpen) {
              camx = wind.w / 2;
              camw = wind.w / 2 - 10;
            }
          } else if (nodeEditorOpen) {
            camx = 10;
            camw = wind.w / 2 - 10;
          }
        } else if (editorsOpen == 3) {
          camx = wind.w / 3;
          camw = wind.w / 3;
        }
      }

      let x = camx + cam.x - this.x;
      let y = camy + cam.y - this.y;

      switch (true) {
        case dist(x + this.w / 2, y - 5, mouseX, mouseY) < 5:
          con = 1;

        break;
        case dist(x + this.w / 2, y + this.h + 5, mouseX, mouseY) < 5:
          con = 2;

        break;
        case dist(x - 5, y + this.h / 2, mouseX, mouseY) < 5:
          con = 3;

        break;
        case dist(x + this.w + 5, y + this.h / 2, mouseX, mouseY) < 5:
          con = 4;

        break;
      }

      if (con !== 0 && userDrawLink.point !== link) {
        links.push(new Link(link, con, userDrawLink.point, userDrawLink.con));
          
        userDrawLink = 0;
        userHasLink = false;
      }
    }
  }
  edit(l){
    if(this.check()){
      menuOpen = "editNode";
      userEditingNode = l;
      scriptIn.hide();
      
      nodeNameEdit.position(wind.w / 4 + 55, wind.h / 4 + 5);
      nodeColorEdit.position(wind.w / 4 + 55, wind.h / 4 + 30);
      nodeBorderEdit.position(wind.w / 4 + 55, wind.h / 4 + 55);
      
      nodeNameEdit.value(this.name);
      nodeColorEdit.value(this.col);
      nodeBorderEdit.value(this.bord);
    }
  }
  hover(l){
    if ((this.check() || this.checked) && menuOpen == "main") {
      this.canHov = true;
      return true;
    } else {
      this.canHov = false;
    }
  }
  draw(l) {
    
    let x = cam.x - this.x;
    let y = cam.y - this.y;
    
    nodeCanvas.fill(this.col);
    nodeCanvas.stroke(this.bord);
    nodeCanvas.strokeWeight(2);
    nodeCanvas.rect(x, y, this.w, this.h, 5);

    nodeCanvas.strokeWeight(1);
    
    if(this.type !== "Template" && this.type !== "Comment" && this.type !== "Note" && !showMode){
      nodeCanvas.ellipse(x + this.w / 2, y - 5, 4);
      nodeCanvas.ellipse(x + this.w / 2, y + this.h + 5, 4);
      nodeCanvas.ellipse(x - 5, y + this.h / 2, 4);
      nodeCanvas.ellipse(x + this.w + 5, y + this.h / 2, 4);
    }

    nodeCanvas.noStroke();
    nodeCanvas.fill(0);
    nodeCanvas.textAlign(CENTER);
    nodeCanvas.textSize(14);
    nodeCanvas.text(this.name, x + this.w / 2, y + this.h / 2 + 4);

    if (this.canHov) {
      nodeCanvas.fill(60, 80);
      nodeCanvas.rect(x, y, this.w, this.h, 5);
    }
    if(userOpenNode == l){
      nodeCanvas.fill(60, 80);
      nodeCanvas.rect(x, y, this.w, this.h, 5);
    }
  }
  check() {
    let camx = 0;
    let camy = 110;
    let camw = 0;
    let camh = wind.h - 85;
    if (nodeEditorOpen) {
      if (editorsOpen == 1) {
        if (nodeEditorOpen) {
          camx = 10;
          camw = wind.w - 20
        }
      } else if (editorsOpen == 2) {
        if (scriptEditorOpen) {
          if (nodeEditorOpen) {
            camx = wind.w / 2;
            camw = wind.w / 2 - 10;
          }
        } else if (nodeEditorOpen) {
          camx = 10;
          camw = wind.w / 2 - 10;
        }
      } else if (editorsOpen == 3) {
        camx = wind.w / 3;
        camw = wind.w / 3;
      }
    }
    let x = cam.x - this.x;
    let y = cam.y - this.y;
    if (mouseX > camx && mouseX < camx + camw && mouseY > camy && mouseY < camy + camh) {
      return (mouseX > x + camx && mouseX < x + this.w + camx && mouseY > y + camy && mouseY < y + this.h + camy);
    } else return false;
  }
}
