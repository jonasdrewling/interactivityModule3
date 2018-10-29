


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







let distanceOnPointerDown = 2;


function onPointerUp(e) {
  
  pointers.removePointer(e.pointerId);
}

function onPointerDown(e) {
  e.preventDefault();
  pointers.updatePointer(e);


}

function onPointerLeave(e) {
  pointers.removePointer(e.pointerId);

}





function onPointerMove(e) {


  



  pointers.updatePointer(e);



  let g = pointers.createPointerGroupings();
  if (g.numOfGroupings > 0) {
    let pg = g.groupings[0];
    // document.getElementById("itemContainer").style.top = ( pg.horizontalSpeed+"px");
    // document.getElementById("layer0").innerHTML = pg.horizontalSpeed;

  if (pointers.numOfPointers > 1) {
    var { distance, isApproaching } = pointers.comparePointers(pointers.pointerIds[0], pointers.pointerIds[1]);

    let pos1 = pointers.getPointer(pointers.pointerIds[0]).currentPos;
    let pos2 = pointers.getPointer(pointers.pointerIds[1]).currentPos;
    let x = ((pos2.x-pos1.x)/2)+ pos1.x; 
    let y = ((pos2.y-pos1.y)/2)+ pos1.y;
 
let container =  document.getElementById("itemContainer");


container.style.top = ( y-container.offsetHeight/2+"px");
container.style.left = ( x-container.offsetWidth/2+"px");


  }



  if (pointers.numOfPointers == 2 && isApproaching == false) {
    if (distance > 180) {

      document.getElementById("item01").style.display = "block";
    }
    if (distance > 240) {
      document.getElementById("item02").style.display = "block";
    }
    if (distance > 300) {
      document.getElementById("item03").style.display = "block";
    }
    if (distance > 360) {
      document.getElementById("item04").style.display = "block";
    }
  }
  if (pointers.numOfPointers == 2 && isApproaching == true) {
    if (distance < 360) {
      document.getElementById("item04").style.display = "none";
    }
    if (distance < 300) {
      document.getElementById("item03").style.display = "none";
    }
    if (distance < 240) {
      document.getElementById("item02").style.display = "none";
    }
    if (distance < 180) {
      document.getElementById("item01").style.display = "none";
    }

  }

  }

}


if (document.readyState != 'loading') onDocumentReady();
else document.addEventListener('DOMContentLoaded', onDocumentReady);
