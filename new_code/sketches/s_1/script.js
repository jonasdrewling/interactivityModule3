
let initialPos1;
let initialPos2; //----------FINGER 2
let newPos1;
let newPos2; //--------- FINGER 2
let movingUp = false;
let movingDown = false;

function onDocumentReady() {
  let el = document.body;

  el.addEventListener('pointerup', onPointerUp);
  el.addEventListener('pointerdown', onPointerDown);
  el.addEventListener('pointermove', onPointerMove);
  el.addEventListener('pointerleave', onPointerLeave);

  document.getElementById("item01").style.display = "none";
  document.getElementById("item02").style.display = "none";
  document.getElementById("item03").style.display = "none";
  document.getElementById("item04").style.display = "none";
  document.getElementById("item05").style.display = "none";
  document.getElementById("item06").style.display = "none";
  document.getElementById("item07").style.display = "none";
  document.getElementById("item08").style.display = "none";

  //Add touch-action="none" to all div tags to disable iOS zooming

  //Get div elements in DOM
  let divElements = document.getElementsByTagName("div");
  //Iterate over all elements
  for (let i = 0; i < divElements.length; i++) {
    //Set attribute
    divElements[i].setAttribute("touch-action", "none");
  }
}

function onPointerUp(e) {
  pointers.removePointer(e.pointerId);
  movingUp = false;
  movingDown = false;
}

function onPointerDown(e) {
  e.preventDefault();
  pointers.updatePointer(e);

  initialPos1 = pointers.getPointer(pointers.pointerIds[0]).currentPos;
  initialPos2 = pointers.getPointer(pointers.pointerIds[1]).currentPos;
}

function onPointerLeave(e) {
  pointers.removePointer(e.pointerId);
}

//---------- DRAG GESTURE ----------

function onPointerMove(e) {

  pointers.updatePointer(e);

  //---------- FINGER 1 ----------

  let container = document.getElementById("itemContainer");

  newPos1 = pointers.getPointer(pointers.pointerIds[0]).currentPos;

  container.style.top = (newPos1.y + 30 + "px");
  container.style.left = (newPos1.x - container.offsetWidth / 2 + "px");


  if (movingDown == false && pointers.getPointer(pointers.pointerIds[0]).isMovingUp == true) {

    movingUp = true;

    if (initialPos1.y - newPos1.y > 80) {
      document.getElementById("item01").style.display = "block";
    }
    if (initialPos1.y - newPos1.y > 160) {
      document.getElementById("item02").style.display = "block";
    }
    if (initialPos1.y - newPos1.y > 220) {
      document.getElementById("item03").style.display = "block";
    }
    if (initialPos1.y - newPos1.y > 280) {
      document.getElementById("item04").style.display = "block";
    }
  }

  if (movingUp == false && pointers.getPointer(pointers.pointerIds[0]).isMovingDown == true) {

    movingDown = true;

    if (initialPos1.y + newPos1.y > 100) {
      document.getElementById("item04").style.display = "none";
    }
    if (initialPos1.y + newPos1.y > 180) {
      document.getElementById("item03").style.display = "none";
    }
    if (initialPos1.y + newPos1.y > 240) {
      document.getElementById("item02").style.display = "none";
    }
    if (initialPos1.y + newPos1.y > 300) {
      document.getElementById("item01").style.display = "none";
    }
  }

  //---------- FINGER 2 ----------

  let container2 = document.getElementById("itemContainer2");

  newPos2 = pointers.getPointer(pointers.pointerIds[1]).currentPos;

  container2.style.top = (newPos2.y + 30 + "px");
  container2.style.left = (newPos2.x - container2.offsetWidth / 2 + "px");


  if (movingDown == false && pointers.getPointer(pointers.pointerIds[1]).isMovingUp == true) {

    movingUp = true;

    if (initialPos2.y - newPos2.y > 80) {
      document.getElementById("item05").style.display = "block";
    }
    if (initialPos2.y - newPos2.y > 160) {
      document.getElementById("item06").style.display = "block";
    }
    if (initialPos2.y - newPos2.y > 220) {
      document.getElementById("item07").style.display = "block";
    }
    if (initialPos2.y - newPos2.y > 280) {
      document.getElementById("item08").style.display = "block";
    }
  }

  if (movingUp == false && pointers.getPointer(pointers.pointerIds[1]).isMovingDown == true) {

    movingDown = true;

    if (initialPos2.y + newPos2.y > 100) {
      document.getElementById("item08").style.display = "none";
    }
    if (initialPos2.y + newPos2.y > 180) {
      document.getElementById("item07").style.display = "none";
    }
    if (initialPos2.y + newPos2.y > 240) {
      document.getElementById("item06").style.display = "none";
    }
    if (initialPos2.y + newPos2.y > 300) {
      document.getElementById("item05").style.display = "none";
    }
  }
}

if (document.readyState != 'loading') onDocumentReady();
else document.addEventListener('DOMContentLoaded', onDocumentReady);