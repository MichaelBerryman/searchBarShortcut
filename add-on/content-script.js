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
// the last option (true) dispatches the event to the listener first, then dispatches event to the window

function navigateToPagesSearchBar() {

  var selectedText = window.getSelection().toString().trim();

// TODO extract to a series of constants
	var element = document.body.querySelector("input[type='search'], input[name='q' i], input[name='search' i], input[placeholder^='search' i], input[aria-label^='search' i]");
	if (element !=null) {
		element.focus();
		if (selectedText.length > 0) {
			element.value = selectedText
		}
		return;
	}
}

module.exports = navigateToPagesSearchBar
