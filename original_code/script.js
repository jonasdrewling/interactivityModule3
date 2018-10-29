function onDocumentReady() {
    let el = document.body;
  
    el.addEventListener('pointerup', onPointerUp);
    el.addEventListener('pointerdown', onPointerDown);
    el.addEventListener('pointermove', onPointerMove);
    el.addEventListener('pointerleave', onPointerLeave);
  }
  
  let distanceOnPointerDown = 2;

  // function setSplitPercent (percent) {
  //   // snap if percent is less than 10
  //   let split = document.getElementById("split");
  //   if (percent < 10) {
  //     split.style.borderStyle = "hidden";
  //     percent = 0;
  //   }
  //   else
  //     split.style.borderStyle = "solid";
  //   split.style.height = `${percent}%`;
  //   document.getElementById("layer0").style.height = `${(100-percent)/2}%`;
  //   document.getElementById("layer1").style.height = `${(100-percent)/2}%`;
  // }

  function onPointerUp(e) {
    pointers.removePointer(e);
    // let warm1 = getOrCreate(e);
    // document.body.removeChild(warm1);
  }
  
  function onPointerDown(e) {
    e.preventDefault();
    pointers.updatePointer(e);
    if (pointers.numOfPointers == 2) {
      let id1 = pointers.pointerIds[0], id2 = pointers.pointerIds[1];
      let { distance } = pointers.comparePointers(id1, id2);
      distanceOnPointerDown = distance;
    }
  }
  
  function onPointerLeave(e) {
    pointers.removePointer(e);
  }
  
  // ----------OPENING THE WARM SPACE----------

  function onPointerMove(e) {
    pointers.updatePointer(e);  //UPDATE POINTERTS FOR EVERY FUNCTION
    let warm1 = getOrCreate(e);

    e.preventDefault();

    let rect = warm1.getBoundingClientRect();
    warm1.style.left = (e.clientX-rect.width/2) + 'px';
    warm1.style.top = (e.clientY-rect.height/2) + 'px';  
  }

  function getOrCreate(evt) {
    const id = 'pointer-' + evt.pointerId;
    let el = document.getElementById(id);
    if (el) return el;
    el = document.createElement('div');
    el.classList.add('pointer');
    // prevent default gestures in iOS
    el.addEventListener('gesturestart', e => e.preventDefault());
    el.addEventListener('gesturechange', e => e.preventDefault());
    el.addEventListener('gestureend', e => e.preventDefault());

    el.id = id;
    document.body.appendChild(el);
    return el;
  }

  // ----------CREATE A NEW HOT SPACE----------

  function openWarm() {
    pointers.updatePointer(e);

    if (pointers.numOfPointers == 2) {
      let { height, width } = document.body.getBoundingClientRect(); //CALLING THE POINTER IDS
      let id1 = pointers.pointerIds[0], id2 = pointers.pointerIds[1];
      let { distance } = pointers.comparePointers(id1, id2);

    if (distanceOnPointerDown > 150) 
        distanceOnPointerDown = distance
  }
  }

  if (document.readyState != 'loading') onDocumentReady();
  else document.addEventListener('DOMContentLoaded', onDocumentReady);
  