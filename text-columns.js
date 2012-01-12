split_text = function() {
  var t = window.getSelection();
  var r = t.getRangeAt();
  var node = r.commonAncestorContainer;
  while (! node.style && node.parentElement) {
	node = node.parentElement;
  }
  if (node) {
	node.style.setProperty("-webkit-column-width", "25em");
	node.style.setProperty("-webkit-column-gap", "1.5em");

  }
}


chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
	if (request.action == "split") {
	  split_text();
	}
    sendResponse({}); 
}); 



