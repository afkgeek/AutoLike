//TIMER
var tmr = require("sdk/timer");
tmr.setInterval(checkURL, 60000);

//Listener for the onPageShow event
require("sdk/tabs").on("pageshow", checkURL);

//Gets the tab information
function checkURL(tab) {
	var tUrl = tab.url //Stores the URL for the tab
	console.log(tUrl); //log URL for checking and debugging
	//check if the URL contains the reference for YouTube
	if (tUrl.indexOf("youtube") > -1) { 
		console.log("youtube");
		likeit(tab); //Forward tab information for finding button
	}
	return 0;
}

//attaches the tab to the addon and searches for the button
function likeit(tab) {
	//calls script to search for button, determine status and click button
	tab.attach({
		contentScriptFile: require("sdk/self").data.url("findLike.js"),
		contentScriptWhen: "ready",
		onMessage: function (message) {
			console.log(message); //Logs output from the script
		},
		onError: function(error) {
			console.log(error.fileName+":"+error.lineNumber+": "+error); //Logs errors for later debugging
		}
	});
	return 0;
}
