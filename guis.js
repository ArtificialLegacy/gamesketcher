function drawLogo(x, y) {
  fill(0, 55, 142);
  stroke(135, 127, 255);
  strokeWeight(3);
  ellipse(x, y, 25);
  noStroke();
  fill(234, 222, 49);
  textAlign(CENTER);
  text("GS", x, y + 5);
  textAlign(LEFT);
  fill(THEMES[theme].MainText);
  textSize(10);
  text("© 2019 4 Bit Studios MIT", x + 20, y + 5);
}

let nx;
let ny = 110;

const MENUS = {
  Node: "node",
  EditNode: "editNode",
  EditLink: "editLink",
  AddTask: "addTask",
  EditTask: "editTask",
  File: "file",
  Export: "export",
  Import: "import",
  Main: "main",
};

function drawEditors() {
  nodeCanvas.remove();
  let camx = 0;
  let camy = 75;
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

  textAlign(LEFT);
  textSize(8);

  if (editorsOpen == 1) {
    fill(THEMES[theme].Editors.Background);
    stroke(0);
    strokeWeight(3);
    if(nodeEditorOpen){
      rect(10, 75, wind.w - 20, 35, 7);
      rect(10, ny, wind.w - 20, wind.h - (ny + 10), 7);
      
      newNodeButton.x = 10;
      newNodeButton.y = 75;
      
      centerCam.x = 60;
      centerCam.y = 75;
      
      gridSnap.x = 110;
      gridSnap.y = 75;
      
      editNode.x = 160;
      editNode.y = 75;
      
      editLink.x = 210;
      editLink.y = 75;
      
      newNodeButton.draw();
      centerCam.draw();
      gridSnap.draw();
      editNode.draw();
      editLink.draw();
      
      push();
      fill(THEMES[theme].Button.Text);
      noStroke();
      textAlign(CENTER);
      textSize(25);
      text("+", 35, 100);
      text("C", 85, 100);
      text("#", 135, 100);
      text("N", 185, 100);
      text("L", 235, 100);
      pop();
      
    } else if(taskEditorOpen) {
      tx = 10;
      tw = wind.w - 20;
      
      rect(10, 75, wind.w - 20, 35, 7);
      rect(10, ny, wind.w - 20, wind.h - (ny + 10) - 35, 7);
      
      tPriority.x = 10;
      tPriority.y = 75;
      
      tBugs.x = 60;
      tBugs.y = 75;
      
      tAdditions.x = 110;
      tAdditions.y = 75;
      
      tPolish.x = 160;
      tPolish.y = 75;
      
      tMisc.x = 210;
      tMisc.y = 75;
      
      tPriority.draw();
      tBugs.draw();
      tAdditions.draw();
      tPolish.draw();
      tMisc.draw();
      
      push();
      fill(THEMES[theme].Button.Text);
      noStroke();
      textAlign(CENTER);
      textSize(25);
      text("!", 35, 100);
      text("B", 85, 100);
      text("+", 135, 100);
      text("P", 185, 100);
      text("M", 235, 100);
      pop();
    } else {
      rect(10, 75, wind.w - 20, wind.h - 85, 7);
    }

    noStroke();
    fill(THEMES[theme].Editors.Text);

    if (scriptEditorOpen) {
      text("[SCRIPT]", 17, 91);
    } else if (nodeEditorOpen) {
      nodeCanvas = createGraphics(wind.w - 20, wind.h - (ny + 10));
      nx = 10;
      nodeCanvas.textAlign(LEFT);
      nodeCanvas.textSize(8);
      nodeCanvas.noStroke();
      nodeCanvas.fill(THEMES[theme].Editors.Text);
      nodeCanvas.text("[NODES]", 7, 16);
    } else if (taskEditorOpen) {
      text("[TASKS]", 17, ny + 16);
    }
  } else if (editorsOpen == 2) {
    
    fill(THEMES[theme].Editors.Background);
    stroke(0);
    strokeWeight(3);
    
    if(nodeEditorOpen){
      if(scriptEditorOpen){
        rect(wind.w / 2, ny, wind.w / 2 - 10, wind.h - (ny + 10), 7);
        rect(wind.w / 2, 75, wind.w / 2 - 10, 35, 7);
        
        newNodeButton.x = wind.w / 2;
        newNodeButton.y = 75;
        
        centerCam.x = wind.w / 2 + 50;
        centerCam.y = 75;
        
        gridSnap.x = wind.w / 2 + 100;
        gridSnap.y = 75;
        
        editNode.x = wind.w / 2 + 150;
        editNode.y = 75;
        
        editLink.x = wind.w / 2 + 200;
        editLink.y = 75;
        
        newNodeButton.draw();
        centerCam.draw();
        gridSnap.draw();
        editNode.draw();
        editLink.draw();
        
        push();
        fill(THEMES[theme].Button.Text);
        noStroke();
        textAlign(CENTER);
        textSize(25);
        text("+", wind.w / 2 + 25, 100);
        text("C", wind.w / 2 + 75, 100);
        text("#", wind.w / 2 + 125, 100);
        text("N", wind.w / 2 + 175, 100);
        text("L", wind.w / 2 + 225, 100);
        pop();
      } else {
        rect(10, 75, wind.w / 2 - 10, 35, 7);
        rect(10, ny, wind.w / 2 - 10, wind.h - (ny + 10), 7);
        
        newNodeButton.x = 10;
        newNodeButton.y = 75;
        
        centerCam.x = 60;
        centerCam.y = 75;
        
        gridSnap.x = 110;
        gridSnap.y = 75;
        
        editNode.x = 160;
        editNode.y = 75;
        
        editLink.x = 210;
        editLink.y = 75;
        
        newNodeButton.draw();
        centerCam.draw();
        gridSnap.draw();
        editNode.draw();
        editLink.draw();
        
        push();
        fill(THEMES[theme].Button.Text);
        noStroke();
        textAlign(CENTER);
        textSize(25);
        text("+", 35, 100);
        text("C", 85, 100);
        text("#", 135, 100);
        text("N", 185, 100);
        text("L", 235, 100);
        pop();
      }
    } 
    if(taskEditorOpen) {
      tx = wind.w / 2;
      tw = wind.w / 2 - 10;
      
      rect(wind.w / 2, ny, wind.w / 2 - 10, wind.h - (ny + 10), 7);
      rect(wind.w / 2, 75, wind.w / 2 - 10, 35, 7);
        
      tPriority.x = wind.w / 2;
      tPriority.y = 75;
        
      tBugs.x = wind.w / 2 + 50;
      tBugs.y = 75;
        
      tAdditions.x = wind.w / 2 + 100;
      tAdditions.y = 75;
        
      tPolish.x = wind.w / 2 + 150;
      tPolish.y = 75;
        
      tMisc.x = wind.w / 2 + 200;
      tMisc.y = 75;
        
      tPriority.draw();
      tBugs.draw();
      tAdditions.draw();
      tPolish.draw();
      tMisc.draw();
        
      push();
      fill(THEMES[theme].Button.Text);
      noStroke();
      textAlign(CENTER);
      textSize(25);
      text("!", wind.w / 2 + 25, 100);
      text("B", wind.w / 2 + 75, 100);
      text("+", wind.w / 2 + 125, 100);
      text("P", wind.w / 2 + 175, 100);
      text("M", wind.w / 2 + 225, 100);
      pop();
    }
    
    if(scriptEditorOpen){
      rect(10, 75, wind.w / 2 - 10, wind.h - 85, 7);
    }

    noStroke();
    fill(THEMES[theme].Editors.Text);
    
    if(nodeEditorOpen){
      nodeCanvas = createGraphics(wind.w / 2 - 10, wind.h - (ny + 10));
      if(scriptEditorOpen){
        nx = wind.w / 2;
      } else {
        nx = 10;
      }
    }

    if (scriptEditorOpen) {
      text("[SCRIPT]", 17, 91);

      if (nodeEditorOpen) {
        nodeCanvas.textAlign(LEFT);
        nodeCanvas.textSize(8);
        nodeCanvas.noStroke();
        nodeCanvas.fill(THEMES[theme].Editors.Text);
        nodeCanvas.text("[NODES]", 7, 16);

      }
      if (taskEditorOpen) {
        text("[TASKS]", wind.w / 2 + 6, ny + 16);
      }
    } else if (nodeEditorOpen) {
      nodeCanvas.textAlign(LEFT);
      nodeCanvas.textSize(8);
      nodeCanvas.noStroke();
      nodeCanvas.fill(THEMES[theme].Editors.Text);
      nodeCanvas.text("[NODES]", 7, 16);
      text("[TASKS]", wind.w / 2 + 6, ny + 16);
    }
  } else if (editorsOpen == 3) {
    tx = wind.w / 3 * 2;
    tw = wind.w / 3 - 10;
    
    fill(THEMES[theme].Editors.Background);
    stroke(0);
    strokeWeight(3);
    rect(10, 75, wind.w / 3 - 10, wind.h - 85, 7);
    rect(wind.w / 3, ny, wind.w / 3, wind.h - (ny + 10), 7);
    rect(wind.w / 3 * 2, ny, wind.w / 3 - 10, wind.h - 120, 7);
    rect(wind.w / 3, 75, wind.w / 3, 35, 7);
    rect(wind.w / 3 * 2, 75, wind.w / 3 - 10, 35, 7);
    
    newNodeButton.x = wind.w / 3;
    newNodeButton.y = 75;
    
    centerCam.x = wind.w / 3 + 50;
    centerCam.y = 75;
    
    gridSnap.x = wind.w / 3 + 100;
    gridSnap.y = 75;
    
    editNode.x = wind.w / 3 + 150;
    editNode.y = 75;
    
    editLink.x = wind.w / 3 + 200;
    editLink.y = 75;
    
    newNodeButton.draw();
    centerCam.draw();
    gridSnap.draw();
    editNode.draw();
    editLink.draw();
    
    push();
    fill(THEMES[theme].Button.Text);
    noStroke();
    textAlign(CENTER);
    textSize(25);
    text("+", wind.w / 3 + 25, 100);
    text("C", wind.w / 3 + 75, 100);
    text("#", wind.w / 3 + 125, 100);
    text("N", wind.w / 3 + 175, 100);
    text("L", wind.w / 3 + 225, 100);
    pop();
    
    tPriority.x = wind.w / 3 * 2;
    tPriority.y = 75;
    
    tBugs.x = wind.w / 3 * 2 + 50;
    tBugs.y = 75;
    
    tAdditions.x = wind.w / 3 * 2 + 100;
    tAdditions.y = 75;
    
    tPolish.x = wind.w / 3 * 2 + 150;
    tPolish.y = 75;
    
    tMisc.x = wind.w / 3 * 2 + 200;
    tMisc.y = 75;
    
    tPriority.draw();
    tBugs.draw();
    tAdditions.draw();
    tPolish.draw();
    tMisc.draw();
    
    push();
    fill(THEMES[theme].Button.Text);
    noStroke();
    textAlign(CENTER);
    textSize(25);
    text("!", wind.w / 3 * 2 + 25, 100);
    text("B", wind.w / 3 * 2 + 75, 100);
    text("+", wind.w / 3 * 2 + 125, 100);
    text("P", wind.w / 3 * 2 + 175, 100);
    text("M", wind.w / 3 * 2 + 225, 100);
    pop();

    noStroke();
    fill(THEMES[theme].Editors.Text);
    
    nodeCanvas = createGraphics(wind.w / 3, wind.h - (ny + 10));
    nx = wind.w / 3;

    text("[SCRIPT]", 17, 91);
    nodeCanvas.textAlign(LEFT);
    nodeCanvas.textSize(8);
    nodeCanvas.noStroke();
    nodeCanvas.fill(THEMES[theme].Editors.Text);
    nodeCanvas.text("[NODES]", 7, 16);
    text("[TASKS]", wind.w / 3 * 2 + 6, ny + 17);
  } else {
    fill(130);
    stroke(0);
    strokeWeight(3);
    rect(10, 75, wind.w - 20, wind.h - 85, 7);
    
    if(nodeEditorOpen){
      nodeCanvas = createGraphics(1, 1);
      nx = -100;
      ny = -100;
    }

    noStroke();
    fill(THEMES[theme].Editors.Text);

    text("[EMPTY]", 17, 91);
  }

  if(nodeEditorOpen){
    if(snapToGrid){
      drawGrid();
    }
    let fail = false;
    for(i = nodes.length - 1; i >= 0; i--){
      if(!fail){
        if(nodes[i].hover(i)) fail = true;
      } else {
         nodes[i].canHov = false; 
      }
    }
    for (i = 0; i < nodes.length; i++) {
      nodes[i].draw(i);
    }
    for(i = 0; i < links.length; i++){
      links[i].draw();
    }
    if(userHasLink && userDrawLink !== 0) userDrawLink.draw();
    image(nodeCanvas, nx, ny);
  }
  
  if(taskEditorOpen){
    drawTasks();
  }
}

function drawGrid(){
  let g = 20;
  
  let x = cam.x % g;
  let y = cam.y % g;
  
  nodeCanvas.stroke(THEMES[theme].Editor.Grid);
  nodeCanvas.strokeWeight(1);
  nodeCanvas.fill(0);
  for(w = 0; w < nodeCanvas.width / g + 1; w++){
    nodeCanvas.line(w * g + x, 0, w * g + x, nodeCanvas.height);
  }
  for(h = 0; h < nodeCanvas.height / g + 1; h++){
    nodeCanvas.line(0, h * g + y, nodeCanvas.width, h * g + y);
  }
}

let templateError = false;

function createNodeMenu() {
  strokeWeight(1);

  fill(60, 160);
  rect(0, 0, wind.w, wind.h);

  fill(THEMES[theme].UI.Background);
  rect(wind.w / 4, wind.h / 4, wind.w / 2, wind.h / 2);

  exitNodeMenuButton.draw();
  createNodeButton.draw();

  fill(THEMES[theme].UI.Text);
  noStroke();
  textSize(15);
  textAlign(LEFT);

  text("Name:", wind.w / 4 + 5, wind.h / 4 + 20);
  text("Color:", wind.w / 4 + 5, wind.h / 4 + 45);
  text("Border:", wind.w / 4 + 5, wind.h / 4 + 70);
  text("Type:", wind.w / 4 + 155, wind.h / 4 + 20);
  if(nodeType.value() == "Script" || nodeType.value() == "Note") text("Template:", wind.w / 4 + 155, wind.h / 4 + 45);

  textAlign(CENTER);
  fill(THEMES[theme].Button.Text);

  text("Cancel", wind.w / 4 * 3 - 37, wind.h / 4 * 3 - 12);
  text("Create", wind.w / 4 * 3 - 107, wind.h / 4 * 3 - 12);
  
  if(templateError){
    fill(THEMES[theme].UI.Error);
    textSize(10);
    textAlign(LEFT);
    text("Templates must have unique names.", wind.w / 4 + 5, wind.h / 4 + wind.h / 2 - 5);
  }
}

function typeScript(){
  nodeTemplate.remove();
  nodeTemplate = createSelect()
    .position(wind.w / 4 + 225, wind.h / 4 + 30)
    .size(90, 23);
  nodeTemplate.option("None");
  
  for(i = 0; i < templates.length; i++){
    nodeTemplate.option(nodes[templates[i]].name);
  }
}

function editNodeMenu(){
  strokeWeight(1);

  fill(60, 160);
  rect(0, 0, wind.w, wind.h);

  fill(THEMES[theme].UI.Background);
  rect(wind.w / 4, wind.h / 4, wind.w / 2, wind.h / 2);

  exitEditNodeButton.draw();
  deleteNodeButton.draw();
  editNodeButton.draw();

  fill(THEMES[theme].UI.Text);
  noStroke();
  textSize(15);
  textAlign(LEFT);

  text("Name:", wind.w / 4 + 5, wind.h / 4 + 20);
  text("Color:", wind.w / 4 + 5, wind.h / 4 + 45);
  text("Border:", wind.w / 4 + 5, wind.h / 4 + 70);

  textAlign(CENTER);
  fill(THEMES[theme].Button.Text);

  text("Cancel", wind.w / 4 * 3 - 37, wind.h / 4 * 3 - 12);
  text("Delete", wind.w / 4 * 3 - 107, wind.h / 4 * 3 - 12);
  text("Edit", wind.w / 4 * 3 - 177, wind.h / 4 * 3 - 12);
}

function editLinkMenu(){
  strokeWeight(1);

  fill(60, 160);
  rect(0, 0, wind.w, wind.h);

  fill(THEMES[theme].UI.Background);
  rect(wind.w / 4, wind.h / 4, wind.w / 2, wind.h / 2);

  exitEditLinkButton.draw();
  deleteLinkButton.draw();
  editLinkButton.draw();

  fill(THEMES[theme].UI.Text);
  noStroke();
  textSize(15);
  textAlign(LEFT);

  text("Color:", wind.w / 4 + 5, wind.h / 4 + 20);

  textAlign(CENTER);
  fill(THEMES[theme].Button.Text);

  text("Cancel", wind.w / 4 * 3 - 37, wind.h / 4 * 3 - 12);
  text("Delete", wind.w / 4 * 3 - 107, wind.h / 4 * 3 - 12);
  text("Edit", wind.w / 4 * 3 - 177, wind.h / 4 * 3 - 12);
}

function addTaskMenu(){
  strokeWeight(1);

  fill(60, 160);
  rect(0, 0, wind.w, wind.h);

  fill(THEMES[theme].UI.Background);
  rect(wind.w / 4, wind.h / 4, wind.w / 2, wind.h / 2);
  
  exitTask.draw();
  createTask.draw();
  
  fill(THEMES[theme].UI.Text);
  noStroke();
  textSize(15);
  textAlign(LEFT);

  text("Name:", wind.w / 4 + 5, wind.h / 4 + 20);
  text("Hover:", wind.w / 4 + 5, wind.h / 4 + 45);
  text("Details:", wind.w / 4 + 5, wind.h / 4 + 70);

  textAlign(CENTER);
  fill(THEMES[theme].Button.Text);

  text("Cancel", wind.w / 4 * 3 - 37, wind.h / 4 * 3 - 12);
  text("Create", wind.w / 4 * 3 - 107, wind.h / 4 * 3 - 12);
}

function editTaskMenu(){
  strokeWeight(1);

  fill(60, 160);
  rect(0, 0, wind.w, wind.h);

  fill(THEMES[theme].UI.Background);
  rect(wind.w / 4, wind.h / 4, wind.w / 2, wind.h / 2);
  
  cancelTask.draw();
  editTask.draw();
  deleteTask.draw();
  
  fill(THEMES[theme].UI.Text);
  noStroke();
  textSize(15);
  textAlign(LEFT);

  text("Name:", wind.w / 4 + 5, wind.h / 4 + 20);
  text("Hover:", wind.w / 4 + 5, wind.h / 4 + 45);
  text("Details:", wind.w / 4 + 5, wind.h / 4 + 70);

  textAlign(CENTER);
  fill(THEMES[theme].Button.Text);

  text("Cancel", wind.w / 4 * 3 - 37, wind.h / 4 * 3 - 12);
  text("Delete", wind.w / 4 * 3 - 107, wind.h / 4 * 3 - 12);
  text("Edit", wind.w / 4 * 3 - 177, wind.h / 4 * 3 - 12);
}

function fileMenu(){
  strokeWeight(1);

  fill(60, 160);
  rect(0, 0, wind.w, wind.h);

  fill(THEMES[theme].UI.Background);
  rect(wind.w / 4, wind.h / 4, wind.w / 2, wind.h / 2);

  saveChange.draw();
  cancelChange.draw();
  saveProject.draw();
  importProject.draw();
  newProject.draw();

  fill(THEMES[theme].UI.Text);
  noStroke();
  textSize(15);
  textAlign(LEFT);

  text("Project Name:", wind.w / 4 + 5, wind.h / 4 + 20);
  text("Theme:", wind.w / 4 + 5, wind.h / 4 + 45);

  textAlign(CENTER);
  fill(THEMES[theme].Button.Text);

  text("Cancel", wind.w / 4 * 3 - 37, wind.h / 4 * 3 - 12);
  text("Save", wind.w / 4 * 3 - 107, wind.h / 4 * 3 - 12);
  text("Export", wind.w / 4 + 37, wind.h / 4 * 3 - 12);
  text("Import", wind.w / 4 + 107, wind.h / 4 * 3 - 12);
  text("New", wind.w / 4 + 177, wind.h / 4 * 3 - 12);
}

function exportMenu(){
  strokeWeight(1);

  fill(60, 160);
  rect(0, 0, wind.w, wind.h);

  fill(130);
  rect(wind.w / 4, wind.h / 4, wind.w / 2, wind.h / 2);

  exitEx.draw();
  exportToLocal.draw();
  exportToJSON.draw();

  fill(0);
  noStroke();
  textSize(15);

  textAlign(CENTER);
  fill(THEMES[theme].Button.Text);

  text("Exit", wind.w / 4 * 3 - 37, wind.h / 4 * 3 - 12);
  text("Browser", wind.w / 4 + 37, wind.h / 4 + 23);
  text("JSON", wind.w / 4 + 37, wind.h / 4 + 53);
}

function importMenu(){
  strokeWeight(1);

  fill(60, 160);
  rect(0, 0, wind.w, wind.h);

  fill(130);
  rect(wind.w / 4, wind.h / 4, wind.w / 2, wind.h / 2);

  exitIm.draw();
  importFromLocal.draw();

  fill(THEMES[theme].UI.Text);
  noStroke();
  textSize(15);
  textAlign(LEFT);

  text("JSON:", wind.w / 4 + 5, wind.h / 4 + 50);

  textAlign(CENTER);
  fill(THEMES[theme].Button.Text);

  text("Exit", wind.w / 4 * 3 - 37, wind.h / 4 * 3 - 12);
  text("Browser", wind.w / 4 + 37, wind.h / 4 + 23);
}
