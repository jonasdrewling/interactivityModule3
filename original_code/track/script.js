function onDocumentReady() {
    let el = document.body;
  
    el.addEventListener('pointerup', onPointerUp);
    el.addEventListener('pointerdown', onPointerDown);
    el.addEventListener('pointermove', onPointerMove);
    el.addEventListener('pointerleave', onPointerLeave);
    setInterval(() => {
      displayData();
    }, 100)
  }
  
  function displayData () {
    let g = pointers.createPointerGroupings();
    let text = "";
    if (g.groupings.length > 0) {
      let pg = g.groupings[0];
       text ="Moving up: " + pg.isMovingUp + "<br/>" +
             "Moving left: " + pg.isMovingLeft + "<br/>" +  
             "number of groupings: " + g.groupings.length + "<br/>" +
             "horizontal speed: " + Math.round(pg.horizontalSpeed)+"<br/>"   +
             "vertical speed: " + Math.round(pg.verticalSpeed)+"<br/>"  +
             "absolut speed: " + Math.round(pg.speed)+"<br/>" +
             "num of pointers: " + pg.numOfPointers.toString() + "<br/>";
    } 

    document.getElementById("data").innerHTML = text;
  }

  function onPointerUp(e) {
    pointers.removePointer(e.pointerId);
    let el = getOrCreate(e);
    el.classList.remove('down');
  }
  
  function onPointerDown(e) {
    e.preventDefault();
    pointers.updatePointer(e);
  }
  
  function onPointerLeave(e) {
    pointers.removePointer(e.pointerId);
    e.preventDefault();
    let el = getOrCreate(e);
    document.body.removeChild(el);
  }
  
  function onPointerMove(e) {
     pointers.updatePointer(e);  
     let el = getOrCreate(e);
     e.preventDefault();
  
    // Position the element from its middle
    let rect = el.getBoundingClientRect();
    el.style.left = (e.clientX-rect.width/2) + 'px';
    el.style.top = (e.clientY-rect.height/2) + 'px';
  }
  
  // Returns an existing element for a pointer id, or makes a new one
  function getOrCreate(evt) {
    const id = 'pointer-' + evt.pointerId;
    let el = document.getElementById(id);
    if (el) return el;
    el = document.createElement('div');
    el.classList.add('pointer');
    
    el.id = id;
    document.body.appendChild(el);
    return el;
  }
  
  if (document.readyState != 'loading') onDocumentReady();
  else document.addEventListener('DOMContentLoaded', onDocumentReady);
  