function navigateToPagesSearchBar() {
	
    var selectedText = window.getSelection().toString().trim();
	console.log("Selected text as passed " + selectedText)
	
	var el = document.body.querySelector("input[type='search'], input[name='q'], input[name='search'], input[type='text']");
	console.log(el)
	if (el !=null) {
		console.log("element not null")
		el.focus();
		if (selectedText.length > 0) {
			el.value = selectedText
		}
		return;
	}
}

window.addEventListener("keydown", function (event) {
    
    document.activeElement
	
	console.log("KeyPressed " + event.key)
	console.log("Get selection " + window.getSelection().toString().trim())
    console.log("Current element " + document.activeElement)
	
  if (event.defaultPrevented || document.activeElement instanceof HTMLTextAreaElement || document.activeElement instanceof HTMLInputElement) {
    return; // Do nothing if the event was already processed
  }
  
  switch (event.key) {
    case "/":
      navigateToPagesSearchBar()
      break;
    default:
      return; // Quit when this doesn't handle the key event.
  }

  // Cancel the default action to avoid it being handled twice (note this is only called if we don't hit the default method)
  event.preventDefault();
}, true);
// the last option dispatches the event to the listener first,
// then dispatches event to the window