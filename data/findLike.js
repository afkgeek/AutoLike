var btn = document.getElementById("watch-like"); //Search for button within page elements
//Perform further checks if found
if (btn != 'null') {
	//if video has not already been liked
	if (btn.title === "Unlike") {
		//Log message
		self.postMessage("Video has already been liked.");
		btn.click(); //Click the button
		//Perform checks to ensure that the button has been pressed.
		if (btn.title === "Unlike") {
			self.postMessage("Video has been liked!");
		} else {
			self.postMessage("Video like failed.");
		}
	} else {
		self.postMessage("Like the video"); //Log that it has already been done.
	};
};
