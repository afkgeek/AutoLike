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
