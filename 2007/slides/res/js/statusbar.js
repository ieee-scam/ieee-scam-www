var statusbarTipTimeout;

function setStatusbarTip(tip, millis)
{
	cancelStatusbarTipTimeout();

    if (millis == 0) 
    {
		if (document.getElementById)    // IE5+ & Gecko
		{
			if( document.getElementById("statusbar1")!=null )
				document.getElementById("statusbar1").innerHTML = tip;

			if( document.getElementById("statusbar2")!=null )
				document.getElementById("statusbar2").innerHTML = tip;
		}
		else if (document.all)          // IE4
		{
			if( document.all["statusbar1"]!=null )
				document.all["statusbar1"].innerHTML = tip;

			if( document.all["statusbar2"]!=null )
				document.all["statusbar2"].innerHTML = tip;
		}
		else                            // Netscape 4
		{
			if( document.layers["statusbar1"]!=null )
				document.layers["statusbar1"].innerHTML = tip;

			if( document.layers["statusbar2"]!=null )
				document.layers["statusbar2"].innerHTML = tip;
		}
    }
    else
        toolbarTipTimeout = setTimeout("setStatusbarTip('&nbsp;', 0)", millis);
}

function cancelStatusbarTipTimeout()
{
	clearTimeout(statusbarTipTimeout);
}
