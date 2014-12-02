var btn = document.getElementById("watch-like"); //Search for button within page elements
//Perform further checks if found
if (btn != 'null') {
	//Check button title
	if (btn.title === "Unlike") {
		//If it is equal to Unlike
		//Log already liked message
		self.postMessage("Video has already been liked.");
	} else {
		//Otherwise...
		//Log not been liked
		self.postMessage("Like the video");
		btn.click(); //Click the button
	};
};
