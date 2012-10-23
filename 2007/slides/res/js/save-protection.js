function clickIE() 
{
	if (document.all)
	{
		alert(saveProtectionMessage);
		return false;
	}
	
	return false;
}

function clickNS(e)
{
	if( document.layers || (document.getElementById && !document.all) )
	{
		if (e.which==2 || e.which==3) 
		{
			alert(saveProtectionMessage);
			return false;
		}
	}

	return false;
}

function initSaveProtection()
{
	if (document.layers)
	{
		document.captureEvents(Event.MOUSEDOWN);
		document.onmousedown = clickNS;
	}
	else
	{
		document.onmouseup = clickNS;
		document.oncontextmenu = clickIE;
	}
}
