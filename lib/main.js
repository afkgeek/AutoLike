require("sdk/tabs").on("pageshow", getURL);

function getURL(tab) {
	checkURL(tab);
	return 0;	
}

function checkURL(tab) {
	var tUrl = tab.url
	console.log(tUrl);
	if (tUrl.indexOf("youtube") > -1) {
		console.log("youtube");
		likeit(tab);
	}
	return 0;
}

function likeit(tab) {
	tab.attach({
		contentScriptFile: require("sdk/self").data.url("findLike.js"),
		contentScriptWhen: "ready",
		onMessage: function (message) {
			console.log(message);
		},
		onError: function(error) {
			console.log(error.fileName+":"+error.lineNumber+": "+error);
		}
	});
	return 0;
}
