chrome.app.runtime.onLaunched.addListener(function() {
	chrome.app.window.create('index.html', {
		id: "getUpWin",
		innerBounds: {
			height: 550,
		    width: 800,
		    top: 100
		},
		frame: "none"
	});
	chrome.app.window.current().fullscreen();
});