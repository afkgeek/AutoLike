var ticker = require("sdk/page-mod");
var brain = require("sdk/self").data;
var bid = "watch-like"; // id to search for

// checks each of the pages, iframes, embeds, etc
// hooks into the youtube watch pages
ticker.PageMod({
	include: /(http|https):\/\/(www\.youtube|youtube).*\/watch.*/, // Regex for catching youtube watch pages 
	contentScriptWhen: "start", // run initial checks when the
	  			    // page is loaded
	contentScript: "", // worker script file
	attachTo: ["existing", "top"],
	onAttach: function(hand) {
        	console.log(" #1 Page URL ==> " + hand.url);
		if (hand.tab.url == hand.url) { // check if at top level
			hand.tab.attach({
				contentScriptFile: brain.url("findLike.js"),
				contentScriptWhen: "ready",
			});
			//	console.log(" #2 SEARCHING FOR BUTTON WITH ID " + bid);
			//	hand.port.emit("findButton", bid); // worker function to find button
			// clean up the mess
	                hand.destroy();
		}
    	}
});
