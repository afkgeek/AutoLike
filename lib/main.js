var ticker = require("sdk/page-mod");

// checks each of the pages, iframes, embeds, etc
// hooks into the youtube watch pages
ticker.PageMod({
	include: /(http|https):\/\/(www\.youtube|youtube).*\/watch.*/, // Regex for catching youtube watch pages 
	contentScriptWhen: "start", // run initial checks when the
	  			    // page is loading
	contentScript: "", // inject no script, you can even omit this
	onAttach: function onAttach(donkey) {
        	if (donkey.tab.url == donkey.url) // check if at top level
        		likeit(donkey.tab); // run the like button script
		// clean up the mess
		donkey.destroy();
        	}
    	}
);

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
}
