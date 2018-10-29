
let initialPos1;
let newPos1;
let movingUp = false;
let movingDown = false;


function onDocumentReady() {
  let el = document.body;

  el.addEventListener('pointerup', onPointerUp);
  el.addEventListener('pointerdown', onPointerDown);
  el.addEventListener('pointermove', onPointerMove);
  el.addEventListener('pointerleave', onPointerLeave);

  document.getElementById("item01").style.display = "none";
  document.getElementById("item02").style.display = "none";;
  document.getElementById("item03").style.display = "none";;
  document.getElementById("item04").style.display = "none";;



  // add touch-action="none" to all div tags to disable iOS zooming

  //Get div elements in DOM
  let divElements = document.getElementsByTagName("div");
  //Iterate over all elements
  for (let i = 0; i < divElements.length; i++) {
    //Set attribute
    divElements[i].setAttribute("touch-action", "none");




 
  }
}







// let distanceOnPointerDown = 2;


function onPointerUp(e) {
  pointers.removePointer(e.pointerId);
  movingUp = false;
  movingDown = false; 
  // document.getElementById("log").innerHTML =  movingUp;



}

function onPointerDown(e) {
  e.preventDefault();
  pointers.updatePointer(e);

  initialPos1 = pointers.getPointer(pointers.pointerIds[0]).currentPos;
  // document.getElementById("log").innerHTML = initialPos1.x;

}

function onPointerLeave(e) {
  pointers.removePointer(e.pointerId);

}





function onPointerMove(e) {


  



  pointers.updatePointer(e);



  // let g = pointers.createPointerGroupings();
  // if (g.numOfGroupings > 0) {
  //   let pg = g.groupings[0];
    // document.getElementById("itemContainer").style.top = ( pg.horizontalSpeed+"px");
    // document.getElementById("layer0").innerHTML = pg.horizontalSpeed;

  // if (pointers.numOfPointers > 1) {
    // var { distance, isApproaching } = pointers.comparePointers(pointers.pointerIds[0], pointers.pointerIds[1]);

    // let pos1 = pointers.getPointer(pointers.pointerIds[0]).distanceTraveled;
    // let pos2 = pointers.getPointer(pointers.pointerIds[1]).distanceTraveled;
    // document.getElementById("log").innerHTML = pos1.x + " " + pos1.y;
    // let x = ((pos2.x-pos1.x)/2)+ pos1.x; 
    // let y = ((pos2.y-pos1.y)/2)+ pos1.y;
 
let container =  document.getElementById("itemContainer");

newPos1 = pointers.getPointer(pointers.pointerIds[0]).currentPos;


// document.getElementById("log").innerHTML =  initialPos1.x + " " + initialPos1.y + " " + newPos1.x + " " + newPos1.y;


container.style.top = ( newPos1.y+30+"px");
container.style.left = ( newPos1.x-container.offsetWidth/2+"px");


  // }


if (movingDown==false && pointers.getPointer(pointers.pointerIds[0]).isMovingUp == true){
  
  movingUp = true;

    if (initialPos1.y-newPos1.y > 80) {

      document.getElementById("item01").style.display = "block";
    }
    if (initialPos1.y-newPos1.y > 160) {

      document.getElementById("item02").style.display = "block";
    }
    if (initialPos1.y-newPos1.y > 220) {

      document.getElementById("item03").style.display = "block";
    }
    if (initialPos1.y-newPos1.y > 280) {

      document.getElementById("item04").style.display = "block";
    }
    
  }
  if (movingUp==false && pointers.getPointer(pointers.pointerIds[0]).isMovingDown == true){
    movingDown=true;
    if (initialPos1.y+newPos1.y > 100) {

      document.getElementById("item04").style.display = "none";
    }
    if (initialPos1.y+newPos1.y > 160) {

      document.getElementById("item03").style.display = "none";
    }
    if (initialPos1.y+newPos1.y > 220) {

      document.getElementById("item02").style.display = "none";
    }
    if (initialPos1.y+newPos1.y > 280) {

      document.getElementById("item01").style.display = "none";
    }
  }


  // }

  // }

}


if (document.readyState != 'loading') onDocumentReady();
else document.addEventListener('DOMContentLoaded', onDocumentReady);
