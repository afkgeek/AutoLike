	var bid = "watch-like";
	console.log(" #3 Finding Button");
	var btn = document.getElementById(bid);
	if (btn != 'null') {
		console.log("Button has been found");
		if (btn.title === "Unlike") {
		} else {
			btn.click();
			console.log("CLICK");
		}
	}

/*
//self.port.on("findButton", function(bid) {
	var bid = "watch-like";
	var btn = document.getElementById(bid); // find the like button
	if (btn != 'null') {
		if (btn.title === "Unlike") {
		} else {
			btn.click();
		};
	};
//});
*/
