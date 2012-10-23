/*
************************************************************
  Keyboard support
    Keys:
      RIGHT Arrow  : Go to Next page
      LEFT Arrow   : Go to Previous page
      Page UP      : Go to Index page
      HOME         : Go to First page
      END          : Go to Last page
      S, s         : Toggle start/stop slide show (not in index)
      ESC          : Stop slide show (not in index)
      I, i         : Toggle exif info (not in index)
      H, h         : Toggle help tips
    Tested on: IE6, Mozilla 1.4, Netscape 7.1, Opera 7.2

    Bugs:
     - HOME,END doesn't work in Opera
************************************************************
*/

var takenAction = false;

//IE&Gecko Code
function IEGeckoKeyPress(oEvent) 
{
	var myKeyCode;

	if (!oEvent)
	    oEvent = window.event;
	if (oEvent.keyCode)
	    myKeyCode = oEvent.keyCode;
	else if (oEvent.which)
	    myKeyCode = oEvent.which;

	if (oEvent.repeat || takenAction)
	    return;
	if (myKeyCode >= 16 && myKeyCode <= 18)
	    return;

	/*if (oEvent.shiftKey)
	    myKeyCode += 1000;
	if (oEvent.ctrlKey)
	    myKeyCode += 2000;
	if (oEvent.altKey)
	    myKeyCode += 4000;*/
	//alert(oEvent.type + "=" + myKeyCode);
	myKeyPress(myKeyCode);
}

function myKeyPress(myKeyCode) 
{
	//disable if remarks window is open
	if( activeElement!=null )
		return;

	if( myKeyCode==39 || myKeyCode==107 ) // RIGHT Arrow   ||   NUM +
	{
		if( hasRealNextPage )
		{
			takenAction = true;
			nextPage();
		}
	}
	else if( myKeyCode==37 || myKeyCode==109 ) // LEFT Arrow    ||    NUM -
	{
		if( hasRealPrevPage )
		{
			takenAction = true;
			prevPage();
		}
	}
	else if( myKeyCode==33 ) // Page UP
	{
		takenAction = true;
		upPage();
	}
	else if( myKeyCode==36 ) // HOME
	{
		takenAction = true;
		firstPage();
	}
	else if( myKeyCode==35 ) // END
	{
		takenAction = true;
		lastPage();
	}
	else if( myKeyCode==27 ) // ESC
	{
		if( isSlideShow )
		{
			// Only if i have slide show
			takenAction = true;
			dontSlides();
			takenAction = false;
		}
	}
	else if( myKeyCode==83 ) // S, s
	{
		if( isSlideShow )
		{
			// Only if i have slide show
			takenAction = true;
			toggleSlideShow();
			takenAction = false;
		}
	}
	else if( myKeyCode==73 ) // I, i
	{
		if( hasMetaData )
		{
			// Only if metadata exists
			takenAction = true;
			toggleElementVisibility("photometainfo");
			takenAction = false;
		}
	}
	else if( myKeyCode==72 ) // H, h
	{
		if( hasNavigationHelpTips )
		{
			// Only if help tips are ON
			takenAction = true;
			toggleElementVisibility("help");
			takenAction = false;
		}
	}
	else
	{
		//alert("KeyCode: " + myKeyCode);
	}
}

function initKeyboard() 
{
	document.onkeydown = IEGeckoKeyPress;
}
