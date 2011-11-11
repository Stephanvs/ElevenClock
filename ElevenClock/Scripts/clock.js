var secondsLeftUntilEndMoment = (getEndMoment().getTime() - new Date().getTime()) / 1000;
var secondsPassed = 0;

var minutesPassed = new Date().getMinutes();

var offset = calculateOffset();

// Update the seconds
setInterval(function () {

	secondsPassed++;
	if (secondsPassed >= 60) {
		minutesPassed++;
		secondsPassed = 0;
	}

	//	var x = ((secondsTicker++ * 6) * calculateOffset())  % 360;
	var seconds = new Date().getSeconds();
	var sdegree = (seconds * 6);
	var srotate = "rotate(" + sdegree + "deg)";

	$("#sec").css({ "-moz-transform": srotate, "-webkit-transform": srotate });

}, 1000);

// Update the hour hand
setInterval(function () {
	var hours = new Date().getHours();
	var mins = new Date().getMinutes();
	var hdegree = hours * 30 + (mins / 2);
	var hrotate = "rotate(" + hdegree + "deg)";

	$("#hour").css({ "-moz-transform": hrotate, "-webkit-transform": hrotate });

}, 1000);

// Update the minutes hand
setInterval(function () {
	//var mins = new Date().getMinutes();
	var mdegree = ((minutesPassed * 6) * offset) % 360;
	var mrotate = "rotate(" + mdegree + "deg)";

	$("#min").css({ "-moz-transform": mrotate, "-webkit-transform": mrotate });

}, 1000);

function getEndMoment() {
	return new Date(2011, 10, 11, 21, 30); // year, month, day, hour, minute, second, millisecond
}

function getWantedEndMoment() {
	return new Date(2011, 10, 11, 23, 11, 11, 11); // year, month, day, hour, minute, second, millisecond
};

function millisecondsLeftUntilEndMoment() {
	return getEndMoment().getTime() - new Date().getTime();
};

function millisecondsLeftUntilWantedEndMoment() {
	return getWantedEndMoment().getTime() - new Date().getTime();
};

function calculateOffset() {
	return millisecondsLeftUntilWantedEndMoment() / millisecondsLeftUntilEndMoment();
};