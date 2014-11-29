require("sdk/tabs").on("ready", getURL);
require("sdk/tabs").

function getURL(tab) {
	checkURL(tab);	
}

function checkURL(tab) {
	var tUrl = tab.url
	if (tUrl.indexOf("youtube") > -1) {
		console.log("youtube");
		likeit(tab);
	}
}

function likeit(tab) {
	tab.attach({
		contentScriptFile: require("sdk/self").data.url("findLike.js"),
		onMessage: function (message) {
			console.log(message);
		},
		onError: function(error) {
			console.log(error.fileName+":"+error.lineNumber+": "+error);
		}
	});
}
