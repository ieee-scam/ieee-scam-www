//// Slideshow section...

// Variables from setup.js: seconds, timerID, exp, pauseIconUrl, playIconUrl

// START/STOP Slideshow
function toggleSlideShow(exp) 
{
	var on = getCookie('slideShowOn');

	if( on!=null )
		dontSlides(exp);
	else
		doSlides(exp);
}

function setSlideShowStatus(status) 
{
	var url = status ? pauseIconUrl : playIconUrl;
	
	if (document.getElementById)	// IE5+ & Gecko
	{
		if( document.getElementById("slide_show1")!=null )
			document.getElementById("slide_show1").src = url;

		if( document.getElementById("slide_show2")!=null )
			document.getElementById("slide_show2").src = url;
	}
	else if (document.all)	// IE4
	{
		if( document.all["slide_show1"]!=null )
			document.all["slide_show1"].src = url;

		if( document.all["slide_show2"]!=null )
			document.all["slide_show2"].src = url;
	}
	else // Netscape 4
	{
		if( document.images["slide_show1"]!=null )
			document.images["slide_show1"].src = url;

		if( document.images["slide_show2"]!=null )
			document.images["slide_show2"].src = url;
	}
}

//start slideshow
function doSlides(exp) 
{
	setCookie("slideShowOn", "on", exp);
	setSlideShowStatus(true);
	timerID = setTimeout('nextPage()', seconds * 1000);
}

//stop slideshow
function dontSlides(exp) 
{
	deleteCookie("slideShowOn");
	setSlideShowStatus(false);
	clearTimeout(timerID);
}

function getCookieVal(offset) 
{
	var endstr = document.cookie.indexOf (";", offset);
	if (endstr == -1)
		endstr = document.cookie.length;
	return unescape(document.cookie.substring(offset, endstr));
}

function getCookie(name) 
{
	var arg = name + "=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;

	while (i < clen) 
	{
		var j = i + alen;
		
		if (document.cookie.substring(i, j) == arg) 
			return getCookieVal (j);
		i = document.cookie.indexOf(" ", i) + 1;
		if (i == 0) 
			break;
	}
	return null;
}

function setCookie(name, value) 
{
	var argv = setCookie.arguments;
	var argc = setCookie.arguments.length;
	var expires = (argc > 2) ? argv[2] : null;
	var path = (argc > 3) ? argv[3] : null;
	var domain = (argc > 4) ? argv[4] : null;
	var secure = (argc > 5) ? argv[5] : false;

	document.cookie = name + "=" + escape (value) +
		((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
		((path == null) ? "" : ("; path=" + path)) +
		((domain == null) ? "" : ("; domain=" + domain)) +
		((secure == true) ? "; secure" : "");
}

function deleteCookie(name) 
{
	var expiration = new Date();

	expiration.setTime(expiration.getTime() - 1);
	document.cookie = name + "=" + getCookie(name) + "; expires=" + expiration.toGMTString();
}
