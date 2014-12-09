self.port.on("findButton", function(bearhunt) {
	var btn = document.getElementById(bearhunt); // find the like button
	if (btn === 'null') {
		return 1;
	} else {
		self.port.emit("gotButton", btn); // return the button if found
	}
});
