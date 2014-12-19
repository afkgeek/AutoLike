var bid = "watch-like"; // Set ID of Button to find
console.log(" #3 Finding Button");
var btn = document.getElementById(bid); // Search for button
if (btn != 'null') {
	// Continue if the button has been found
	console.log(" #4 Button has been found ==> " + btn.title);
	if (btn.title === "Unlike") {
		// Do nothing if the video has been liked
		return 2;
	} else {
		btn.click(); // Click the button
		console.log(" #5 CLICK");
		return 0;
	}
}
