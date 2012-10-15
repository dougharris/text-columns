// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(
	function(tab) {
	  	chrome.tabs.sendRequest(tab.id, {action: "split"}, null);
	  	console.log("browser action");
    });
