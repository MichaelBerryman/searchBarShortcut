function navigateToPagesSearchBar() {
	
    var selectedText = window.getSelection().toString().trim();
	
	var el = document.body.querySelector("input[type='search'], input[name='q' i], input[name='search' i], input[name='s' i], input[placeholder^='search' i]");
	if (el !=null) {
		el.focus();
		if (selectedText.length > 0) {
			el.value = selectedText
		}
		return;
	}
}

window.addEventListener("keydown", function (event) {
    
  if (event.defaultPrevented || document.activeElement instanceof HTMLTextAreaElement || document.activeElement instanceof HTMLInputElement) {
    return; // Do nothing if the event was already processed, or if the user is currently in a text box
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