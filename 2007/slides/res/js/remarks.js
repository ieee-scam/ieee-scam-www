var remarksId = "remarks";
var remarksCountId = "remarkscount";
var remarksHeaderId = "remarksheader";

function showRemarks()
{
	if( document.getElementById ) // IE5+ & Gecko
	{
		document.getElementById(remarksId).style.visibility = "visible";
		document.getElementById(remarksId).style.display = "block";
	}
	else if( document.all ) // IE4
	{
		document.all[remarksId].style.visibility = "visible";
		document.all[remarksId].style.display = "block";
	}
	else if( document.layers ) // Netscape 4
	{
		document.layers[remarksId].visibility = "show";
		document.layers[remarksId].display = "block";
	}
}

function bringRemarksToTop()
{
	location.hash = remarksHeaderId;
}

function toggleRemarksVisibility()
{
	if( document.getElementById ) // IE5+ & Gecko
	{
		if( document.getElementById(remarksId).style.visibility=="visible" )
		{
			document.getElementById(remarksId).style.visibility = "hidden";
			document.getElementById(remarksId).style.display = "none";
		}
		else
		{
			document.getElementById(remarksId).style.visibility = "visible";
			document.getElementById(remarksId).style.display = "block";
		}
	}
	else if( document.all ) // IE4
	{
		if( document.all[remarksId].style.visibility=="visible" )
		{
			document.all[remarksId].style.visibility = "hidden";
			document.all[remarksId].style.display = "none";
		}
		else
		{
			document.all[remarksId].style.visibility = "visible";
			document.all[remarksId].style.display = "block";
		}
	}
	else if( document.layers ) // Netscape 4
	{
		if( document.layers[remarksId].visibility=="show" )
		{
			document.layers[remarksId].visibility = "hide";
			document.layers[remarksId].display = "none";
		}
		else
		{
			document.layers[remarksId].visibility = "show";
			document.layers[remarksId].display = "block";
		}
	}
}

function setRemarksCount(count)
{
	if( document.getElementById ) // IE5+ & Gecko
		document.getElementById(remarksCountId).innerHTML = count;
	else if( document.all ) // IE4
		document.all[remarksCountId].innerHTML = count;
	else if( document.layers ) // Netscape 4
		document.layers[remarksCountId].innerHTML = count;
}


function checkAllBoxes(form,fieldname,elementName)  
{ 
	for(i=0;i<form.elements.length;i++) 
	{
		if ( form.elements[i].name.substr(0,fieldname.length) == fieldname )
		{
			var q=document.getElementsByName(elementName);
			form.elements[i].checked = q[0].checked;
		}
	}
} 

function validateAddRemark(message)
{
	var author=document.getElementsByName('author')[0];
	var remark=document.getElementsByName('remark')[0];

	var valid=true;	
	if (author.value.length==0)
	{
		author.style.backgroundColor='#fce4dd';
		valid=false;
	}	
	else	
		author.style.backgroundColor='white';

	if (remark.value.length==0)
	{
		remark.style.backgroundColor='#fce4dd';
		valid=false;
	}	
	else	
		remark.style.backgroundColor='white';

	if (!valid)
		window.alert(message);

	return valid;
}

function validateAdminmode(message)
{
	var valid=true;

	for(i=0;i<document.adminmode.elements.length;i++) 
	{
		var elmt=document.adminmode.elements[i];
		if ( (elmt.name.substr(0,5) == "name[") || (elmt.name.substr(0,4) == "msg[") )
		{
			if (elmt.value.length==0)
			{
				elmt.style.backgroundColor='#fce4dd';
				valid=false;
			}	
			else	
				elmt.style.backgroundColor='white';
		}
	}

	if (!valid)
		window.alert(message);

	return valid;


}