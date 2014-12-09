var ticker = require("sdk/page-mod");
var bearhunt = "watch-like"; // id to search for

// checks each of the pages, iframes, embeds, etc
// hooks into the youtube watch pages
ticker.PageMod({
	include: /(http|https):\/\/(www\.youtube|youtube).*\/watch.*/, // Regex for catching youtube watch pages 
	contentScriptWhen: "ready", // run initial checks when the
	  			    // page is loaded
	contentScriptFile: "./findLike.js", // worker script file
	onAttach: function onAttach(donkey) {
        	if (donkey.tab.url == donkey.url) { // check if at top level
			donkey.port.emit("findButton", bearhunt); // worker function to find button
			donkey.port.on("gotButton", function(likeBtn) {
				if (likeBtn.title != "Unlike") // if not already liked
					likeBtn.click(); // click the button
			}
		// clean up the mess
		donkey.destroy();
        	}
    	}
);
