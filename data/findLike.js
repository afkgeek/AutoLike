var clicked = false
var bid = "watch-like"; // Set ID of Button to find

menu();

function menu() {
	console.log(" clicked => " + clicked);
	if (clicked) {
	} else {
		findButton();
		//menu();
	}
}

function findButton() {
	console.log(" #3 Finding Button");
	var btn = document.getElementById(bid); // Search for button
	if (btn === 'null') {
		// do nothing if not found
		clicked = true;
	} else {
		// Continue if the button has been found
		console.log(" #4 Button has been found ==> " + btn.title);
		checkTitle(btn);
	}
}

function checkTitle(btn) {
	if (btn.title === "Unlike") {
		clicked = true;
	} else {
		clickButton(btn);
	}
}

function clickButton(btn) {
	var tag = btn.getAttribute('onclick');
	console.log(" Details: " + tag);
	btn.click(); // Click the button
	console.log(" #5 CLICK");
}