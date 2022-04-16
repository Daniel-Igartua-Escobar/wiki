
//Listen for the event
window.addEventListener("MyEventType", function(evt) {
  alert(evt.detail);
}, false);

//Dispatch an event
var evt = new CustomEvent("MyEventType", {detail: "Any Object Here"});
window.dispatchEvent(evt)