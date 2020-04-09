if (document.addEventListener) {
	document.addEventListener("DOMContentLoaded", function() {
		loaded();
	});
} else if (document.attachEvent) {
	document.attachEvent("onreadystatechange", function() {
		loaded();
	});
}

function loaded() {
	setInterval(loop, 300);
}
var x = 0;
var titleText = ["s", "st", "sta", "star", "starr", "starry", "starr", "star", "sta", "st", "s"]
function loop() {
	document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length];
}
