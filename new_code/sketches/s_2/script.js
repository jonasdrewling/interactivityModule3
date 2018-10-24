


function onDocumentReady() {
  let el = document.body;

  el.addEventListener('pointerup', onPointerUp);
  el.addEventListener('pointerdown', onPointerDown);
  el.addEventListener('pointermove', onPointerMove);
  el.addEventListener('pointerleave', onPointerLeave);

  document.getElementById("item01").style.visibility = "hidden";
  document.getElementById("item02").style.visibility = "hidden";;
  document.getElementById("item03").style.visibility = "hidden";;
  document.getElementById("item04").style.visibility = "hidden";;



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
  }



  if (pointers.numOfPointers == 2 && isApproaching == false) {
    if (distance > 180) {

      document.getElementById("item01").style.visibility = "visible";
    }
    if (distance > 240) {
      document.getElementById("item02").style.visibility = "visible";
    }
    if (distance > 300) {
      document.getElementById("item03").style.visibility = "visible";
    }
    if (distance > 360) {
      document.getElementById("item04").style.visibility = "visible";
    }
  }
  if (pointers.numOfPointers == 2 && isApproaching == true) {
    if (distance < 360) {
      document.getElementById("item04").style.visibility = "hidden";
    }
    if (distance < 300) {
      document.getElementById("item03").style.visibility = "hidden";
    }
    if (distance < 240) {
      document.getElementById("item02").style.visibility = "hidden";
    }
    if (distance < 180) {
      document.getElementById("item01").style.visibility = "hidden";
    }

  }

  }

}


if (document.readyState != 'loading') onDocumentReady();
else document.addEventListener('DOMContentLoaded', onDocumentReady);
