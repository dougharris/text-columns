
var split_text = function() {
  var selection = window.getSelection();
  if (selection.rangeCount > 0) {
    var r = selection.getRangeAt(0);
    var node = r.commonAncestorContainer;

    while (! node.style && node.parentElement) {
	  node = node.parentElement;
    }
    if (node) {
	  node.style.setProperty("-webkit-column-count", "2");
    }
    window.getSelection().collapseToStart();
  }
}

chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
	if (request.action == "split") {
	  split_text();
	}
	sendResponse({}); 
}); 
