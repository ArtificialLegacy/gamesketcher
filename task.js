let userTask = null;
let userTaskType = null;

let tx = 0;
let tw = 0;

let scroll = 0;
let iscroll = 0;

class Task {
  constructor(name, script, hover){
    this.name = name;
    this.script = script;
    this.hover = hover;
    
    if (this.name.length > 15) {
      this.name = this.name.slice(0, 15);
    }
  }
}

function drawTasks(){
  let type = "";
  
  switch(true){
    case tPriority.checked:
      type = "priority";
    break;
    case tBugs.checked:
      type = "bugs";
    break;
    case tAdditions.checked:
      type = "additions";
    break;
    case tPolish.checked:
      type = "polish";
    break;
    case tMisc.checked:
      type = "misc";
    break;
    default:
      type = "none";
    break;
  }
  
  if(type !== "none"){
    let limit = (wind.h - ny - 40) / 30 + 5;
    let z = 0;
    
    for(i = 0; i < taskButtons[type].length; i++){
      
      if(z > limit) break;
      
      taskButtons[type][i].x = tx + 5;
      taskButtons[type][i].y = ny + 30 * i + 30;
      taskButtons[type][i].w = tw - 10;
      taskButtons[type][i].h = 30;
      
      taskButtons[type][i].draw();
      
      fill(0);
      noStroke();
      textAlign(CENTER);
      textSize(18);
      text(tasks[type][i].name, tx + 5 + ((tw - 10) / 2), ny + 30 * i + 53);
      
      z++;
    }
    
    addTask.x = tx + 5;
    addTask.y = ny + 30 * i + 35;
    addTask.w = tw - 10;
    addTask.h = 30;
  
    addTask.draw();
  
    fill(0);
    noStroke();
    textAlign(CENTER);
    textSize(18);
    text("Add Task", tx + 5 + ((tw - 10) / 2), ny + 30 * i + 58);
  }
}
