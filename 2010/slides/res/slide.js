/* Slide specific JavaScript functions */

function getImageInfoElement() {
	return document.getElementById("image-info");	
}

function getInfoButtonElement() {
	return document.getElementById("info-button");	
}

function showImageInfo() {
	getInfoButtonElement().href = "javascript:hideImageInfo();";
	getImageInfoElement().style.display = "block";
}

function hideImageInfo() {
	getInfoButtonElement().href = "javascript:showImageInfo();";
	getImageInfoElement().style.display = "none";	
}
