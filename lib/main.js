require("sdk/tabs").on("ready", getURL);

function getURL(tab) {
	checkURL(tab.url);	
}

function checkURL(tab) {
	if (tab.indexOf("youtube") > -1) {
		console.log("youtube");
		likeit();
	}
}

function likeit() {
	var element = findButton();
	console.log(element);
	/*if(element != 'null'){
		if (element.title === "Unlike") {
			console.log("Video Already Liked.");
		} else {
			element.click();
		}
	} else {
		console.log("No Like Button Found");
	}*/
}

function findButton() {
	var likeButton = document.getElementsByID("watch-like");
	return likeButton;
}
