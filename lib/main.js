var ticker = require("sdk/page-mod");
var brain = require("sdk/self").data;
var bid = "watch-like"; // id to search for

// checks each of the pages, iframes, embeds, etc
// hooks into the youtube watch pages
ticker.PageMod({
	include: /(http|https):\/\/(www\.youtube|youtube).*\/watch.*/, // Regex for catching youtube watch pages 
	contentScriptWhen: "end", // run initial checks when the
							  // page is loaded
	contentScript: "", // worker script
	attachTo: ["existing", "top"],
	onAttach: function(hand) {
        console.log(" #1 Page URL ==> " + hand.url);
		if (hand.tab.url == hand.url) { // check if at top level
			tabControl(hand.tab); // forward tab control to separate function
			// clean up the mess
	                hand.destroy();
		}
	}
});

function tabControl(tab) {
	console.log(" #2 Attaching to tab ==> " + tab.url);
	tab.attach({
		contentScriptFile: brain.url("findLike.js"), // tab script to run
		contentScriptWhen: "end"					 // run script when page has finished loading
	});
}
