/* Monster Characteristics: 
colors: 
	skin: (RGB color value)
	eye: [blue, brown, green, red, black]
size: 
	height:
	weight:
appendages:
	arms: range 2 - 6 in pairs
	legs: range 2 - 8 in pairs; if 8 then no arms
	antennae: boolean (50% odds)
	tail: boolean (20% odds)
	horns: boolean (33% odds)
	wings: boolean (10 % odds)
strengths: 
	[venom, immunity, fire, armor, vision, swim]

Note: command + d for batch select
*/

// constructor function
function Monster(skin, eye, height, weight, arms, legs, antennae, tail, horns, wings, strengths) {
	this.colors.skin = skin;
	this.colors.eye = eye;
	this.size.height = height;
	this.size.weight = weight;
	this.appendages.arms = arms;
	this.appendages.legs = legs;
	this.appendages.antennae = antennae;
	this.appendages.tail = tail;
	this.appendages.horns = horns;
	this.appendages.wings = wings;
	this.strengths = strengths;
}

function randomBoolean(percentage) {
	if(percentage) {
		return Math.random() < percentage/100;
	} else {
		return Math.random() < 0.5; 
	}
}

// need to output to RGB
function getSkin() {
	function toHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
	}

	function rgbToHex(r, g, b) {
	    return "#" + toHex(r) + toHex(g) + toHex(b);
	}

	var r = Math.floor(Math.random() * 255);
	var g = Math.floor(Math.random() * 255);
	var b = Math.floor(Math.random() * 255);
	return rgbToHex(r, g, b);
}


function getEye() {
	var eyeOptions = ["blue", "brown", "green", "red", "black"];
	var index = Math.floor(Math.random() * 5);
	return eyeOptions[index];
}

function getHeight()
function getWeight()
function getArms()
function getLegs()

function getAntennae() { // no argument since percentage is 50%
	return randomBoolean(); // Q: what if I write this line without "return"? Is it a call?
}

function getTail() {
	return randomBoolean(20);
}

function getHorns() {
	return randomBoolean(33);
}

function getWings() {
	return randomBoolean(10); // changed from 40
}

function getStrengths() {
	var strengthOptions = ["venom", "immunity", "fire", "armor", "vision", "swim"];
	var strengths = [];
	var strengthOne = Math.floor(Math.random() * 6);
	var strengthTwo	= strengthOne
	while (strengthTwo === strengthOne) {
		strengthTwo	= Math.floor(Math.random() * 6);
	}
	strengths.push(strengthOptions[strengthOne], strengthOptions[strengthTwo]);
	return strengths;
}


