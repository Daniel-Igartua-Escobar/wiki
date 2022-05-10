
//Listen for the event
window.addEventListener("MyEventType", function(evt) {
  alert(evt.detail);
}, false);

//Dispatch an event
var evt = new CustomEvent("MyEventType", {detail: "Any Object Here"});
window.dispatchEvent(evt)



function prueba1() {
  console.log('prueba 1');
}

function prueba2() {
  console.log('prueba 2');
}

var methods = {
  1: () => prueba1(),
  2: () => prueba2()
}