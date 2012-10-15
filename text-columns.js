
var split_text = function() {
	var r = window.getSelection().getRangeAt();
	var node = r.commonAncestorContainer;

	while (! node.style && node.parentElement) {
		node = node.parentElement;
	}
	if (node) {
		node.style.setProperty("-webkit-column-count", "2");
	}
	window.getSelection().collapseToStart();
}


chrome.extension.onRequest.addListener(
	function(request, sender, sendResponse) {
		if (request.action == "split") {
			split_text();
		}
		sendResponse({}); 
	}); 
