let oldX = 0;
let oldY = 0;

function mouseDragged() {
  if (mouseButton == RIGHT && menuOpen == MENUS.Main) {
    if(nodeEditorOpen){
      for(i = 0; i < nodes.length; i++){
        if(nodes[i].checked){
          nodes[i].checked = false;
        }
      }
      userHasNode = false;
    
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
      if (mouseX > camx && mouseX < camx + camw && mouseY > camy && mouseY < camy + camh) {
        let difx = mouseX - oldX;
        let dify = mouseY - oldY;
        
        difx = max(min(difx, 20), -20);
        dify = max(min(dify, 20), -20);
        
        cam.x += difx;
        cam.y += dify;
      }
    }
  } else if(mouseButton == LEFT && menuOpen == MENUS.Main && userTool == "select") {
    for(i = nodes.length - 1; i >= 0; i--){
      nodes[i].use();
    }
  }
  oldX = mouseX;
  oldY = mouseY;
}

function mouseReleased(){
  if(userTool == "select"){
    for(i = 0; i < nodes.length; i++){
      nodes[i].select(i);
    }
  }
  
  for(i = 0; i < nodes.length; i++){
    if(nodes[i].checked){
      nodes[i].checked = false;
    }
  }
  userHasNode = false;
}

function mousePressed() {
  oldX = mouseX;
  oldY = mouseY;
  if (menuOpen == MENUS.Main) {
    
    if(userTool == "editNode"){
      for(i = 0; i < nodes.length; i++){
        nodes[i].edit(i);
      }
    } else if(userTool == "editLink"){
      for(i = 0; i < links.length; i++){
        links[i].edit(i);
      }
    }
    
    // Buttons
    
    if(fileButton.check()){
      menuOpen = MENUS.File;
      scriptIn.hide();
      projectNameEdit.position(wind.w / 4 + 100, wind.h / 4 + 5).value(projectName);
      themeEdit.position(wind.w / 4 + 100, wind.h / 4 + 30);
    }
    
    if (toggleScriptButton.use()) {
      if (scriptEditorOpen) {
        scriptEditorOpen = false;
        scriptIn.hide();
        editorsOpen--;
      } else {
        scriptIn.show();
        scriptEditorOpen = true;
        editorsOpen++;
      }
    }

    if (toggleNodeButton.use()) {
      if (nodeEditorOpen) {
        nodeEditorOpen = false;
        editorsOpen--;
      } else {
        nodeEditorOpen = true;
        editorsOpen++;
      }
      let w = 0;
      let h = 0;
      switch(editorsOpen){
        case 1:
          //wind.w - 20, wind.h - 85
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

    if (toggleTaskButton.use()) {
      if (taskEditorOpen) {
        taskEditorOpen = false;
        editorsOpen--;
      } else {
        taskEditorOpen = true;
        editorsOpen++;
      }
      let w = 0;
      let h = 0;
      switch(editorsOpen){
        case 1:
          //wind.w - 20, wind.h - 85
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

    if (newNodeButton.check() && nodeEditorOpen) {
      templateError = false;
      menuOpen = MENUS.Node;
      nodeNameInput.position(wind.w / 4 + 55, wind.h / 4 + 5);
      nodeColorInput.position(wind.w / 4 + 55, wind.h / 4 + 30);
      nodeBorderInput.position(wind.w / 4 + 55, wind.h / 4 + 55);
      nodeType.position(wind.w / 4 + 225, wind.h / 4 + 5).value("Script");
      typeScript();
      scriptIn.hide();
    }
    
    if(nodeEditorOpen){
      if(centerCam.check()){
        cam.x = 0;
        cam.y = 0;
      }
    
      if(gridSnap.use()){
        if(gridSnap.checked){
          snapToGrid = true;
        } else {
          snapToGrid = false;
        }
      }
    
      if(editNode.use()){
        if(editNode.checked){
          userTool = "editNode";
          editLink.checked = false;
        } else {
          userTool = "select";
        }
      }
    
      if(editLink.use()){
        if(editLink.checked){
          userTool = "editLink";
          editNode.checked = false;
        } else {
          userTool = "select";
        }
      }
    }
    
    if(taskEditorOpen){
      if(tPriority.use()){
        if(tPriority.checked){
          tBugs.checked = false;
          tAdditions.checked = false;
          tPolish.checked = false;
          tMisc.checked = false;
        } else {
          
        }
      }
      
      if(tBugs.use()){
        if(tBugs.checked){
          tPriority.checked = false;
          tAdditions.checked = false;
          tPolish.checked = false;
          tMisc.checked = false;
        } else {
          
        }
      }
      
      if(tAdditions.use()){
        if(tAdditions.checked){
          tPriority.checked = false;
          tBugs.checked = false;
          tPolish.checked = false;
          tMisc.checked = false;
        } else {
          
        }
      }
      
      if(tPolish.use()){
        if(tPolish.checked){
          tPriority.checked = false;
          tBugs.checked = false;
          tAdditions.checked = false;
          tMisc.checked = false;
        } else {
          
        }
      }
      
      if(tMisc.use()){
        if(tMisc.checked){
          tPriority.checked = false;
          tBugs.checked = false;
          tAdditions.checked = false;
          tPolish.checked = false;
        } else {
          
        }
      }
      
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
        if(addTask.check()){
          menuOpen = MENUS.AddTask;
          scriptIn.hide();
          taskName.position(wind.w / 4 + 55, wind.h / 4 + 5);
          taskHover.position(wind.w / 4 + 55, wind.h / 4 + 30);
          taskScript.position(wind.w / 4 + 55, wind.h / 4 + 55);
        } else {
          for(i = 0; i < taskButtons[type].length; i++){
            if(taskButtons[type][i].check()){
              menuOpen = MENUS.EditTask;
              scriptIn.hide();
              
              userTaskType = type;
              userTask = i;
            
              taskEditName.position(wind.w / 4 + 55, wind.h / 4 + 5);
              taskHover.position(wind.w / 4 + 55, wind.h / 4 + 30);
              taskScript.position(wind.w / 4 + 55, wind.h / 4 + 55);
            
              taskEditName.value(tasks[type][i].name);
              taskHover.value(tasks[type][i].hover);
              taskScript.value(tasks[type][i].script);
              
              break;
            }
          }
        }
      }
    }
  } else if(menuOpen == MENUS.Node) {
    if (exitNodeMenuButton.check()) {
      menuOpen = MENUS.Main;
      scriptIn.show();
      
      nodeNameInput.position(-200, -20);
      nodeColorInput.position(-200, -200);
      nodeBorderInput.position(-200, -200);
      nodeType.position(-200, -200);
      nodeTemplate.position(-200, -200);
    }

    if (createNodeButton.check()) {
      if(nodeType.value() == "Template"){
        let fail = false;
        for(i = 0; i < templates.length; i++){
          if(nodes[templates[i]].type == "Template"){
            if(nodeNameInput.value() == nodes[templates[i]].name) fail = true;
          }
        }
        if(fail || nodeNameInput.value == "None"){
          templateError = true;
          return;
        }
        
        templates.push(nodes.length);
      }
      
      nodes.push(new Node(nodeNameInput.value(), nodeColorInput.value(), nodeBorderInput.value(), nodeType.value()));

      if((nodeType.value() == "Script" || nodeType.value() == "Note") && nodeTemplate.value() !== "None"){
        let tem = 0;
        for(i = 0; i < templates.length; i++){
          if(nodes[templates[i]].name == nodeTemplate.value()) tem = templates[i];
        }
        
        nodes[nodes.length-1].script = nodes[tem].script;
      } else if(nodeType.value == "Script") {
        nodes[nodes.length-1].script = "";
      } else {
        nodes[nodes.length-1].script = null;
      }
      
      menuOpen = MENUS.Main;
      scriptIn.show();
      
      nodeNameInput.position(-200, -20);
      nodeColorInput.position(-200, -200);
      nodeBorderInput.position(-200, -200);
      nodeType.position(-200, -200);
      nodeTemplate.position(-200, -200);
    }
  } else if(menuOpen == MENUS.EditNode){
    if (exitEditNodeButton.check()) {
      menuOpen = MENUS.Main;
      userTool = "select";
      editNode.checked = false;
      scriptIn.show();
      
      nodeNameEdit.position(-200, -20);
      nodeColorEdit.position(-200, -200);
      nodeBorderEdit.position(-200, -200);
    }
    
    if(deleteNodeButton.check()){
      for(z = 0; z < 4; z++){
        for(i = 0; i < links.length; i++){
          if(links[i].point1 == userEditingNode || links[i].point2 == userEditingNode){
            links.splice(i, 1);
          }
        }
      }
      for(i = 0; i < links.length; i++){
        if(links[i]) if(links[i].point1 > userEditingNode) links[i].point1--;
        if(links[i]) if(links[i].point2 > userEditingNode) links[i].point2--;
      }
      if(nodes[userEditingNode].type == "Template"){
        
      }
      nodes.splice(userEditingNode, 1);
      
      menuOpen = MENUS.Main;
      userTool = "select";
      editNode.checked = false;
      scriptIn.show();
      
      nodeNameEdit.position(-200, -20);
      nodeColorEdit.position(-200, -200);
      nodeBorderEdit.position(-200, -200);
    }

    if (editNodeButton.check()) {
      
      nodes[userEditingNode].name = nodeNameEdit.value();
      nodes[userEditingNode].col = nodeColorEdit.value();
      nodes[userEditingNode].bord = nodeBorderEdit.value();

      menuOpen = MENUS.Main;
      userTool = "select";
      editNode.checked = false;
      scriptIn.show();
      
      nodeNameEdit.position(-200, -20);
      nodeColorEdit.position(-200, -200);
      nodeBorderEdit.position(-200, -200);
    }
  } else if(menuOpen == MENUS.EditLink){
    if (exitEditLinkButton.check()) {
      menuOpen = MENUS.Main;
      userTool = "select";
      editLink.checked = false;
      scriptIn.show();
      
      linkColorEdit.position(-200, -200);
    }
    
    if(deleteLinkButton.check()){

      links.splice(userEditingLink, 1);
      
      menuOpen = MENUS.Main;
      userTool = "select";
      editLink.checked = false;
      scriptIn.show();
      
      linkColorEdit.position(-200, -200);
    }

    if (editLinkButton.check()) {
      
      links[userEditingLink].col = linkColorEdit.value();

      menuOpen = MENUS.Main;
      userTool = "select";
      editLink.checked = false;
      scriptIn.show();
      
      linkColorEdit.position(-200, -200);
    }
  } else if (menuOpen == MENUS.AddTask){
    if(exitTask.check()){
      menuOpen = MENUS.Main;
      scriptIn.show();
      
      taskName.position(-200, -200);
      taskScript.position(-200, -200).value("");
      taskHover.position(-200, -200).value("");
    }
    
    if(createTask.check()){
      menuOpen = MENUS.Main;
      scriptIn.show();
      
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
      
      tasks[type].unshift(new Task(taskName.value(), taskScript.value(), taskHover.value()));
      taskButtons[type].unshift(new Button(0, 0, 1, 1, taskHover.value()));
      
      taskName.position(-200, -200);
      taskScript.position(-200, -200).value("");
      taskHover.position(-200, -200).value("");
    }
  } else if(menuOpen == MENUS.EditTask){
    if(editTask.check()){
      tasks[userTaskType][userTask].name = taskEditName.value();
      tasks[userTaskType][userTask].hover = taskHover.value();
      tasks[userTaskType][userTask].script = taskScript.value();
      
      taskbuttons[type][userTask].toolbar = taskHover.value();
      
      menuOpen = MENUS.Main;
      scriptIn.show();
      
      taskEditName.position(-200, -200);
      taskScript.position(-200, -200).value("");
      taskHover.position(-200, -200).value("");
    }
    
    if(cancelTask.check()){
      menuOpen = MENUS.Main;
      scriptIn.show();
      
      taskEditName.position(-200, -200);
      taskScript.position(-200, -200).value("");
      taskHover.position(-200, -200).value("");
    }
    
    if(deleteTask.check()){
      tasks[userTaskType].splice(userTask, 1);
      taskButtons[userTaskType].splice(userTask, 1);
      
      menuOpen = MENUS.Main;
      scriptIn.show();
      
      taskEditName.position(-200, -200);
      taskScript.position(-200, -200).value("");
      taskHover.position(-200, -200).value("");
    }
  } else if(menuOpen == MENUS.File){
    if(saveChange.check()){
      projectName = projectNameEdit.value();
      
      if(projectName.replace(/\s/g,'') == "") projectName = "Untitled Project";
      
      theme = THEME[themeEdit.value()];
      
      menuOpen = MENUS.Main;
      scriptIn.show();
      projectNameEdit.position(-200, -200);
      themeEdit.position(-200, -200);
    }
    
    if(cancelChange.check()){
      menuOpen = MENUS.Main;
      scriptIn.show();
      projectNameEdit.position(-200, -200);
      themeEdit.position(-200, -200);
    }
    
    if(saveProject.check()){
      menuOpen = MENUS.Export;
      projectNameEdit.position(-200, -200);
      themeEdit.position(-200, -200);
    }
    
    if(importProject.check()){
      menuOpen = MENUS.Import;
      projectNameEdit.position(-200, -200);
      themeEdit.position(-200, -200);
      importFromJSON.position(wind.w / 4 + 55, wind.h / 4 + 35);
    }
    
    if(newProject.check()){
      menuOpen = MENUS.Main;
      scriptIn.position(-200, -200).value("");
      projectNameEdit.position(-200, -200);
      themeEdit.position(-200, -200);
      
      projectName = "Untitled Project";

      nodes = [];
      links = [];
      templates = [];

      taskButtons = {
        priority: [],
        bugs: [],
        additions: [],
        polish: [],
        misc: [],
      };

      tasks = {
        priority: [],
        bugs: [],
        additions: [],
        polish: [],
        misc: [],
      };
      
    }
  } else if(menuOpen == MENUS.Import){
    if(exitIm.check()){
      menuOpen = MENUS.Main;
      scriptIn.show();
      importFromJSON.position(-200, -200);
    }
    
    if(importFromLocal.check()){
      loadFromLocal();
      
      menuOpen = MENUS.Main;
      scriptIn.position(-200, -200).value("");
      scriptIn.show();
      importFromJSON.position(-200, -200);
    }
  } else if(menuOpen == MENUS.Export){
    if(exitEx.check()){
      menuOpen = MENUS.Main;
      scriptIn.show();
    }
    
    if(exportToLocal.check()){
      saveToLocal();
      
      menuOpen = MENUS.Main;
      scriptIn.show();
    }
    
    if(exportToJSON.check()){
      saveToJSON();
      
      menuOpen = MENUS.Main;
      scriptIn.show();
    }
  }
  
  if(nodeEditorOpen && menuOpen == MENUS.Main){
    
    if(userTool == "select"){
      let canLink = false;
      for (i = 0; i < nodes.length; i++) {
      
        if(nodes[i].link(i)){
          canLink = true;
          break;
        }
      }
      if(userHasLink && !canLink){
        userDrawLink = 0;
        userHasLink = false;
      }
    }
  }
}

function keyPressed(){
  if(keyCode == 220){
    if(!showMode) {
      showMode = true;
    } else {
      showMode = false;
    }
  }
}
