// Make the DIV element draggable:
// dragElement(document.getElementById("mydiv"));


function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV: 
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
var textClickedColor;


 // Call listener function at run time
// window.onresize = function(){
//   if (window.innerWidth>700) { // If media query matches
    // document.body.style.backgroundColor = "grey";
  //   textClickedColor = "green";
  // } 
  
  // else{
  //  document.body.style.backgroundColor = "#d8d8d8";
  
  // else if (window.innerWidth <699) {
  //  textClickedColor = "#494949";
  //  var items = document.getElementsByClassName("boxcolor");
  //  for (var i=0; i < items.length; i++) {
  //   console.log(items[i])
  //    items[i].style.backgroundColor = "white";
    
  //  }
  //  var texts = document.getElementsByClassName("textcolor");
  //  for (var i=0; i < items.length; i++) {
  //   console.log(items[i])
  //    items[i].style.backgroundColor = "white";
    
  //  }
{
  window.addEventListener('resize', turnBlack);

  function turnBlack(element) {
  
      if (window.innerWidth > 1000) {
          element.style.color = "#2e2e2e";
      } else if (window.innerWidth >= 300) {
    element.style.color = "white";
  }
  }
// function turnBlack(element){
//   console.log(textClickedColor);
//   element.style.color = textClickedColor;
  
// }
// Attach listener function on state changes
window.onload=function(){
  
  $(function () {
    $(".container div").draggable({ containment: "window" });
});
}
}
