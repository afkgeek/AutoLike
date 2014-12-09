self.port.on("findButton", function(bearhunt) {
	var btn = document.getElementById(bearhunt); // find the like button
	if (btn != 'null') self.port.emit("gotButton", btn); // return the button if found
});
