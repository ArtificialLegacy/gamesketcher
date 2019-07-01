let saveName;

class CNode {
  constructor(x, y, name, col, bord, type, script){
    this.x = x;
    this.y = y;
    this.name = name;
    this.col = col;
    this.bord = bord;
    this.type = type;
    this.script = script;
  }
}

function formatSave(){
  let cnodes = [];
  
  for(let n of nodes){
    cnodes.push(new CNode(n.x, n.y, n.name, n.col, n.bord, n.type, n.script));
  }
  
  saveName = projectName.toLowerCase().replace(/\s/g,'');
  saveData = {
    name: projectName,
    nodes: cnodes,
    links: links,
    tasks: tasks,
  };
}

function deconstructSave(sav){
  projectName = sav.name;
  for(let n of sav.nodes){
    nodes.push(new Node(n.name, n.col, n.bord, n.type));
    nodes[nodes.length-1].x = n.x;
    nodes[nodes.length-1].y = n.y;
    nodes[nodes.length-1].script = n.script;
  }
  for(let l of sav.links){
    links.push(new Link(l.point1, l.con1, l.point2, l.con2));
    links[links.length-1].col = l.col;
  }
  for(let tt in sav.tasks){
    for(let t of sav.tasks[tt]){
      tasks[tt].push(new Task(t.name, t.script, t.hover));
    }
  }
  templates = [];
  for(i = 0; i < nodes.length; i++){
    if(nodes[i].type == "Template") templates.push(i);
  }
  for(let t in tasks){
    for(i = 0; i < tasks[t].length; i++){
      taskButtons[t][i] = new Button(0, 0, 1, 1, tasks[t][i].hover);
    }
  }
}



function saveToLocal(){
  if (typeof(Storage) !== "undefined") {
    formatSave();
    localStorage.setItem("gamesketcher", JSON.stringify(saveData));
  } else {
    alert("Your browser doesn't support local storage!");
  }
}

function saveToJSON(){
  formatSave();
  saveJSON(saveData, `${saveName}_gamesketcher.json`);
}

function loadFromLocal(){
  deconstructSave(JSON.parse(localStorage.getItem("gamesketcher")));
}

function loadFromJSON(){
  menuOpen = "main";
  importFromJSON.position(-200, -200);
  
  scriptIn.position(-200, -200).value("");
  
  var file = importFromJSON.elt.files[0];
  if (file) {
    var reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.onload = function (evt) {
      deconstructSave(JSON.parse(evt.target.result));
    }
    reader.onerror = function (evt) {
      alert("Error reading file");
    }
  }
}
