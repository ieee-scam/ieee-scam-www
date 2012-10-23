var activeElement = null;

function showElement(elementID)
{
	if( document.getElementById ) // IE5+ & Gecko
		document.getElementById(elementID).style.visibility = "visible";
	else if( document.all ) // IE4
		document.all[elementID].style.visibility = "visible";
	else if( document.layers ) // Netscape 4
		document.layers[elementID].visibility = "show";
}

function hideElement(elementID)
{
	if( document.getElementById ) // IE5+ & Gecko
		document.getElementById(elementID).style.visibility = "hidden";
	else if( document.all ) // IE4
		document.all[elementID].style.visibility = "hidden";
	else if( document.layers ) // Netscape 4
		document.layers[elementID].visibility = "hide";
}

function toggleElementVisibility(elementID)
{
	if( document.getElementById ) // IE5+ & Gecko
	{
		if( document.getElementById(elementID).style.visibility=="visible" )
			document.getElementById(elementID).style.visibility = "hidden";
		else
			document.getElementById(elementID).style.visibility = "visible";
	}
	else if( document.all ) // IE4
	{
		if( document.all[elementID].style.visibility=="visible" )
			document.all[elementID].style.visibility = "hidden";
		else
			document.all[elementID].style.visibility = "visible";
	}
	else if( document.layers ) // Netscape 4
	{
		if( document.layers[elementID].visibility=="show" )
			document.layers[elementID].visibility = "hide";
		else
			document.layers[elementID].visibility = "show";
	}
}

function gotoUrl(url)
{
	if( url!=null )
		document.location = url;
	takenAction = false;
}

function blurHandler(evt)
{
	activeElement = null;
}

function focusHandler(evt)
{
	var e = evt ? evt : window.event;

	if (!e)
		return;
	if (e.target)
		activeElement = e.target;
	else if (e.srcElement)
		activeElement = e.srcElement;
}

function setupActiveElementHandler()
{
	var i, j;

	for (i = 0; i < document.forms.length; i++)
	{
		for (j = 0; j < document.forms[i].elements.length; j++)
		{
			document.forms[i].elements[j].onfocus = focusHandler;
			document.forms[i].elements[j].onblur  = blurHandler;
		}
	}
}
