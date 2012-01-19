split_text = function() {
	var nodewidth;
	var fontsize, size_text;
	var required_width, avail_width;
	var colwidth, colcount;
	var trycount = 0;

	var r = window.getSelection().getRangeAt();
	var node = r.commonAncestorContainer;

	while (! node.style && node.parentElement) {
		node = node.parentElement;
	}
	if (node) {
		node.style.setProperty("-webkit-column-count", "2");
		/***
		do {
			trycount++;
			nodewidth = node.offsetWidth;
			size_text = document.defaultView.getComputedStyle(node).getPropertyCSSValue('font-size').cssText;
			colcount = document.defaultView.getComputedStyle(node).getPropertyCSSValue('-webkit-column-count').cssText;
			fontsize = size_text.replace(/\D+/,'');
			
			required_width=25*fontsize;
			avail_width=(nodewidth-(3*fontsize))/2;
			if (required_width < avail_width) {
				colwidth="25em";
			} else {
				colwidth=avail_width+"px";
			}
			node.style.setProperty("-webkit-column-gap", "1.5em");
			node.style.setProperty("-webkit-column-width", colwidth);
			// setting column width sometimes changes nodewidth
		} while (trycount < 5 && node.offsetWidth != nodewidth);
		***/

	}
}


chrome.extension.onRequest.addListener(
	function(request, sender, sendResponse) {
		if (request.action == "split") {
			split_text();
		}
		sendResponse({}); 
	}); 



