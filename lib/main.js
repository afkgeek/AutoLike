var ticker = require("sdk/page-mod");
var brain = require("sdk/self").data;
var bid = "watch-like"; // id to search for

var manyHands = [];

// checks each of the pages, iframes, embeds, etc
// hooks into the youtube watch pages
ticker.PageMod({
	include: /(http|https):\/\/(www\.youtube|youtube).*\/watch.*/, // Regex for catching youtube watch pages 
	contentScriptWhen: "end", // run initial checks when the
							  // page is loaded
	contentScript: "", // worker script
	attachTo: ["existing", "top"],
	onAttach: function(hand) {
		manyHands.push(hand);
        console.log(" #1 Page URL ==> " + hand.url);
		//if (hand.tab.url == hand.url) { // check if at top level
			var t = tabControl(hand.tab); // forward tab control to separate function
		//}
		if (t) { removeHand(hand, manyHands); }
		hand.on("detach", function() {
			console.log(" #7 Cleaning up...");
			removeHand(this, manyHands);
		});
	}
});

function removeHand(hand, handsArray) {
	var index = handsArray.indexOf(hand);
	if (index != -1) {
		handsArray.splice(index,1);
	}
	hand.destroy();
}

function tabControl(tab) {
	console.log(" #2 Attaching to tab ==> " + tab.url);
	tab.attach({
		contentScriptFile: brain.url("findLike.js"), // tab script to run
		contentScriptWhen: "end"					 // run script when page has finished loading
	});
	return true;
}
