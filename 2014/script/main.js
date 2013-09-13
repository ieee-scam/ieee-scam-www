var isMedia = (function(){
	var div;

	return function(query){

		//if the <div> doesn't exist, create it and make sure it's hidden
		if (!div){
			div = document.createElement("div");
			div.id = "ncz1";
			div.style.cssText = "position:absolute;top:-1000px";
			document.body.insertBefore(div, document.body.firstChild);            
		}

		div.innerHTML = "_<style media=\"" + query + "\"> #ncz1 { width: 1px; }</style>";
		div.removeChild(div.firstChild);
		return div.offsetWidth == 1;    
	};
})();
if (isMedia("only screen and (max-width:640px)") || isMedia("screen and (max-device-width:640px)")) {
	var facebook = document.getElementById("facebook");
	if (facebook) {
		facebook.parentNode.removeChild(facebook);	// avoid iFrame loading on mobile pages
	}
	var twitter = document.getElementById("twitter");
	if (twitter) {
		twitter.parentNode.removeChild(twitter);	// avoid iFrame loading on mobile pages
	}
}
var links = document.links;

for (var i = 0, linksLength = links.length; i < linksLength; i++) {
	if (links[i].hostname != window.location.hostname) {
		links[i].target = '_blank';
	} 
}
