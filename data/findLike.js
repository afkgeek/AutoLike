var btn = document.getElementById("watch-like");
if (btn != 'null') {
	if (btn.title === "Unlike") {
		self.postMessage("Video has already been liked.");
	} else {
		self.postMessage("Like the video"); 
	};
};
