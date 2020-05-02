// This file needs to wait for the click on the button and inject this file.

function fetchArticles() {
	// This has 3 parameters tabId, object, function callback
	// Called twice to inject both the jquery and the content.js files
	chrome.tabs.executeScript(null, {file: "jquery-2.2.js"}, function(){
		chrome.tabs.executeScript(null, {file: "content.js"});
	});
	
}

document.getElementById("button").addEventListener("click", fetchArticles);