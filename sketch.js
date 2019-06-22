let fileButton = new Button(5, 40, 50, 25);

let newNodeButton = new Button(-500, -500, 50, 35, "Add New Node");
let centerCam = new Button(-500, -500, 50, 35, "Center View");
let gridSnap = new Button(-500, -500, 50, 35, "Toggle Grid Snap", undefined, undefined, true);
gridSnap.checked = false;
let editNode = new Button(-500, -500, 50, 35, "Edit Node", undefined, undefined, true);
editNode.checked = false
let editLink = new Button(-500, -500, 50, 35, "Edit Link", undefined, undefined, true);
editLink.checked = false;

let tPriority = new Button(-500, -500, 50, 35, "Open Priority Tasks", undefined, undefined, true);
tPriority.checked = false;
let tBugs = new Button(-500, -500, 50, 35, "Open Bug Fix Tasks", undefined, undefined, true);
tBugs.checked = false;
let tAdditions = new Button(-500, -500, 50, 35, "Open Gameplay Addition Tasks", undefined, undefined, true);
tAdditions.checked = false;
let tPolish = new Button(-500, -500, 50, 35, "Open Feature Polish Tasks", undefined, undefined, true);
tPolish.checked = false;
let tMisc = new Button(-500, -500, 50, 35, "Open Misc Tasks", undefined, undefined, true);
tMisc.checked = false;

let addTask = new Button(-500, -500, 1, 1);

let taskName;
let taskScript;
let exitTask;
let createTask;
let taskEditName;
let deleteTask;
let cancelTask;
let editTask;
let taskHover;

let toggleScriptButton = new Button(100, 40, 60, 25, "Toggle Script Editor", undefined, undefined, true);
let toggleNodeButton = new Button(170, 40, 60, 25, "Toggle Node Editor", undefined, undefined, true);
let toggleTaskButton = new Button(240, 40, 60, 25, "Toggle Task Editor", undefined, undefined, true);

let editorsOpen = 3;
let scriptEditorOpen = true;
let nodeEditorOpen = true;
let taskEditorOpen = true;

let menuOpen = "main";

let exitNodeMenuButton;
let createNodeButton;

let nodeNameInput;
let nodeColorInput;
let nodeBorderInput;
let nodeType;
let nodeTemplate;

let exitEditNodeButton;
let editNodeButton;
let deleteNodeButton;

let nodeNameEdit;
let nodeColorEdit;
let nodeBorderEdit;

let exitEditLinkButton;
let editLinkButton;
let deleteLinkButton;

let linkColorEdit;

let newProject;

let scriptIn;

let projectNameEdit;

let saveChange;
let cancelChange;

let saveProject;
let importProject;

let exportToLocal;
let exportToJSON;

let importFromLocal;
let importFromJSON;

let userTool = "select";

let projectName = "Untitled Project";

let nodes = [];
let links = [];
let templates = [];

let taskButtons = {
  priority: [],
  bugs: [],
  additions: [],
  polish: [],
  misc: [],
};

let tasks = {
  priority: [],
  bugs: [],
  additions: [],
  polish: [],
  misc: [],
};

let saveData = {
  name: "Untitled Project",
  nodes: [],
  links: [],
  tasks: {},
};

let cam = {
  x: 0,
  y: 0,
};

let wind = {
  w: 0,
  h: 0,
};

let nodeCanvas;

function setup() {
  wind.w = windowWidth;
  wind.h = windowHeight

  if (wind.w < 400) wind.w = 400;
  if (wind.h < 500) wind.h = 500;

  createCanvas(wind.w, wind.h);
  
  nodeCanvas = createGraphics(wind.w / 3, 75, wind.w / 3, wind.h - 85);

  exitNodeMenuButton = new Button(wind.w / 4 * 3 - 70, wind.h / 4 * 3 - 30, 65, 25, undefined, "node");
  createNodeButton = new Button(wind.w / 4 * 3 - 140, wind.h / 4 * 3 - 30, 65, 25, undefined, "node");
  
  exitEditNodeButton = new Button(wind.w / 4 * 3 - 70, wind.h / 4 * 3 - 30, 65, 25, undefined, "editNode");
  editNodeButton = new Button(wind.w / 4 * 3 - 210, wind.h / 4 * 3 - 30, 65, 25, undefined, "editNode");
  deleteNodeButton = new Button(wind.w / 4 * 3 - 140, wind.h / 4 * 3 - 30, 65, 25, undefined, "editNode");
  
  exitEditLinkButton = new Button(wind.w / 4 * 3 - 70, wind.h / 4 * 3 - 30, 65, 25, undefined, "editLink");
  editLinkButton = new Button(wind.w / 4 * 3 - 210, wind.h / 4 * 3 - 30, 65, 25, undefined, "editLink");
  deleteLinkButton = new Button(wind.w / 4 * 3 - 140, wind.h / 4 * 3 - 30, 65, 25, undefined, "editLink");
  
  exitTask = new Button(wind.w / 4 * 3 - 70, wind.h / 4 * 3 - 30, 65, 25, undefined, "addTask");
  createTask = new Button(wind.w / 4 * 3 - 140, wind.h / 4 * 3 - 30, 65, 25, undefined, "addTask");
  deleteTask = new Button(wind.w / 4 * 3 - 140, wind.h / 4 * 3 - 30, 65, 25, undefined, "editTask");
  editTask = new Button(wind.w / 4 * 3 - 210, wind.h / 4 * 3 - 30, 65, 25, undefined, "editTask");
  cancelTask = new Button(wind.w / 4 * 3 - 70, wind.h / 4 * 3 - 30, 65, 25, undefined, "editTask");
  
  saveChange = new Button(wind.w / 4 * 3 - 140, wind.h / 4 * 3 - 30, 65, 25, undefined, "file");
  cancelChange = new Button(wind.w / 4 * 3 - 70, wind.h / 4 * 3 - 30, 65, 25, undefined, "file");
  
  saveProject = new Button(wind.w / 4 + 5, wind.h / 4 * 3 - 30, 65, 25, undefined, "file");
  importProject = new Button(wind.w / 4 + 75, wind.h / 4 * 3 - 30, 65, 25, undefined, "file");
  
  exitIm = new Button(wind.w / 4 * 3 - 70, wind.h / 4 * 3 - 30, 65, 25, undefined, "import");
  exitEx = new Button(wind.w / 4 * 3 - 70, wind.h / 4 * 3 - 30, 65, 25, undefined, "export");
  
  exportToLocal = new Button(wind.w / 4 + 5, wind.h / 4 + 5, 65, 25, undefined, "export");
  exportToJSON = new Button(wind.w / 4 + 5, wind.h / 4 + 35, 65, 25, undefined, "export");
  
  importFromLocal = new Button(wind.w / 4 + 5, wind.h / 4 + 5, 65, 25, undefined, "import");
  
  newProject = new Button(wind.w / 4 + 145, wind.h / 4 * 3 - 30, 65, 25, undefined, "file");
  
  nodeNameInput = createInput()
    .position(-200, -200)
    .size(90, 15);
  
  nodeColorInput = createColorPicker()
    .position(-200, -200)
    .size(90, 15);
    
  nodeBorderInput = createColorPicker()
    .position(-200, -200)
    .size(90, 15);
  
  nodeType = createSelect()
    .position(-200, -200)
    .size(90, 23)
    .changed(() => {
      if(nodeType.value() == "Script" || nodeType.value() == "Note"){
        typeScript();
      } else {
        nodeTemplate.position(-200, -200);
      }
    });
  nodeType.option("Script")
  nodeType.option("Template")
  nodeType.option("Label");
  nodeType.option("Comment");
  nodeType.option("Note");
  
  nodeTemplate = createSelect()
    .position(-200, -200)
    .size(90, 23);
  
  
  nodeNameEdit = createInput()
    .position(-200, -200)
    .size(90, 15);
  
  nodeColorEdit = createColorPicker()
    .position(-200, -200)
    .size(90, 15);
    
  nodeBorderEdit = createColorPicker()
    .position(-200, -200)
    .size(90, 15);
  
  
  
  linkColorEdit = createColorPicker()
    .position(-200, -200)
    .size(90, 15);
  
  scriptIn = createElement("textarea")
    .position(-10000, -10000)
    .style('background-color', color(0, 0, 0, 0))
    .style('resize', 'none')
    .input(() => {
      nodes[userOpenNode].script = scriptIn.value();
    });
  
  taskName = createInput()
    .position(-200, -200)
    .size(90, 15);
  
  taskScript = createElement("textarea")
    .position(-200, -200)
    .size(300, 120)
    .style('background-color', color(0, 0, 0, 0))
    .style('resize', 'none');
  
  taskEditName = createInput()
    .position(-200, -200)
    .size(90, 15);
  
  taskHover = createInput()
    .position(-200, -200)
    .size(90, 15);
  
  projectNameEdit = createInput()
    .position(-200, -200)
    .size(90, 15);
  
  importFromJSON = createFileInput(loadFromJSON)
    .position(-200, -200)
    .size(90, 15);
  
  window.addEventListener("contextmenu", function(e) { e.preventDefault(); });
}

function draw() {
  
  push();

  // layout
  background(60);
  stroke(0);
  strokeWeight(1);

  line(0, 35, wind.w, 35);
  line(0, 70, wind.w, 70);

  drawLogo(17, 17);

  // Buttons
  fileButton.draw();
  toggleScriptButton.draw();
  toggleNodeButton.draw();
  toggleTaskButton.draw();

  // Button text
  fill(0);
  noStroke();
  textAlign(CENTER);
  textSize(15);

  text("File", 30, 57);
  text("Scripts", 130, 57);
  text("Nodes", 200, 57);
  text("Tasks", 270, 57);
  
  // Project Name
  textAlign(LEFT);
  text(projectName, 310, 57);

  // Editors
  drawEditors();

  if (menuOpen == "node") {
    createNodeMenu();
  } else if(menuOpen == "editNode"){
    editNodeMenu();
  } else if(menuOpen == "editLink"){
    editLinkMenu();
  } else if(menuOpen == "addTask"){
    addTaskMenu();
  } else if(menuOpen == "editTask"){
    editTaskMenu();
  } else if(menuOpen == "file"){
    fileMenu();
  } else if(menuOpen == "import"){
    importMenu();
  } else if(menuOpen == "export"){
    exportMenu();
  }

  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  wind = {
    w: windowWidth,
    h: windowHeight,
  };

  exitNodeMenuButton = new Button(wind.w / 4 * 3 - 70, wind.h / 4 * 3 - 30, 65, 25, undefined, "node");
  createNodeButton = new Button(wind.w / 4 * 3 - 140, wind.h / 4 * 3 - 30, 65, 25, undefined, "node");
  
  exitEditNodeButton = new Button(wind.w / 4 * 3 - 70, wind.h / 4 * 3 - 30, 65, 25, undefined, "editNode");
  editNodeButton = new Button(wind.w / 4 * 3 - 210, wind.h / 4 * 3 - 30, 65, 25, undefined, "editNode");
  deleteNodeButton = new Button(wind.w / 4 * 3 - 140, wind.h / 4 * 3 - 30, 65, 25, undefined, "editNode");
  
  exitEditLinkButton = new Button(wind.w / 4 * 3 - 70, wind.h / 4 * 3 - 30, 65, 25, undefined, "editLink");
  editLinkButton = new Button(wind.w / 4 * 3 - 210, wind.h / 4 * 3 - 30, 65, 25, undefined, "editLink");
  deleteLinkButton = new Button(wind.w / 4 * 3 - 140, wind.h / 4 * 3 - 30, 65, 25, undefined, "editLink");
  
  exitTask = new Button(wind.w / 4 * 3 - 70, wind.h / 4 * 3 - 30, 65, 25, undefined, "addTask");
  createTask = new Button(wind.w / 4 * 3 - 140, wind.h / 4 * 3 - 30, 65, 25, undefined, "addTask");
  deleteTask = new Button(wind.w / 4 * 3 - 140, wind.h / 4 * 3 - 30, 65, 25, undefined, "editTask");
  editTask = new Button(wind.w / 4 * 3 - 210, wind.h / 4 * 3 - 30, 65, 25, undefined, "editTask");
  cancelTask = new Button(wind.w / 4 * 3 - 70, wind.h / 4 * 3 - 30, 65, 25, undefined, "editTask");
  
  saveChange = new Button(wind.w / 4 * 3 - 140, wind.h / 4 * 3 - 30, 65, 25, undefined, "file");
  cancelChange = new Button(wind.w / 4 * 3 - 70, wind.h / 4 * 3 - 30, 65, 25, undefined, "file");
  
  saveProject = new Button(wind.w / 4 + 5, wind.h / 4 * 3 - 30, 65, 25, undefined, "file");
  importProject = new Button(wind.w / 4 + 75, wind.h / 4 * 3 - 30, 65, 25, undefined, "file");
  
  exitIm = new Button(wind.w / 4 * 3 - 70, wind.h / 4 * 3 - 30, 65, 25, undefined, "import");
  exitEx = new Button(wind.w / 4 * 3 - 70, wind.h / 4 * 3 - 30, 65, 25, undefined, "export");
  
  exportToLocal = new Button(wind.w / 4 + 5, wind.h / 4 + 5, 65, 25, undefined, "export");
  exportToJSON = new Button(wind.w / 4 + 5, wind.h / 4 + 35, 65, 25, undefined, "export");
  
  importFromLocal = new Button(wind.w / 4 + 5, wind.h / 4 + 5, 65, 25, undefined, "import");
  
  newProject = new Button(wind.w / 4 + 145, wind.h / 4 * 3 - 30, 65, 25, undefined, "file");
  refreshMenus();
  
  switch(editorsOpen){
    case 1:
      w = wind.w - 35;
      h = wind.h - 120;
    break;
    case 2:
      w = wind.w / 2 - 25;
      h = wind.h - 120;
    break;
    case 3:
      w = wind.w / 3 - 25;
      h = wind.h - 120;
    break;
  }
  scriptIn.size(w, h);
}

function refreshMenus(){
  if(menuOpen == "node"){
    nodeNameInput.position(wind.w / 4 + 55, wind.h / 4 + 5);
    nodeColorInput.position(wind.w / 4 + 55, wind.h / 4 + 30);
    nodeBorderInput.position(wind.w / 4 + 55, wind.h / 4 + 55);
    nodeType.position(wind.w / 4 + 225, wind.h / 4 + 5);
    if(nodeType.value() == "Script") typeScript();
  } else if(menuOpen == "editNode"){
    nodeNameEdit.position(wind.w / 4 + 55, wind.h / 4 + 5);
    nodeColorEdit.position(wind.w / 4 + 55, wind.h / 4 + 30);
    nodeBorderEdit.position(wind.w / 4 + 55, wind.h / 4 + 55);
  } else if(menuOpen == "editLink"){
    linkColorEdit.position(wind.w / 4 + 55, wind.h / 4 + 5);
  } else if(menuOpen == "addTask"){
    taskName.position(wind.w / 4 + 55, wind.h / 4 + 5);
    taskScript.position(wind.w / 4 + 55, wind.h / 4 + 30);
  } else if(menuOpen == "editTask"){
    taskEditName.position(wind.w / 4 + 55, wind.h / 4 + 5);
    taskHover.position(wind.w / 4 + 55, wind.h / 4 + 30);
    taskScript.position(wind.w / 4 + 55, wind.h / 4 + 55);
  } else if(menuOpen == "file"){
    projectNameEdit.position(wind.w / 4 + 100, wind.h / 4 + 5);
  }
}
