function initPageShadow() 
{
	var bg_color = "#FFFFFF";
	var page_bottom_elem;

	if (document.getElementById) // IE5+ & Gecko
	{
		var elem = document.getElementById("body");

		if (elem.currentStyle) 
			bg_color = elem.currentStyle["backgroundColor"];
		else if (window.getComputedStyle) 
			bg_color = window.getComputedStyle(elem, "").getPropertyValue("background-color");

		page_bottom_elem = document.getElementById("page_bottom_shadow");
	}
	
	page_bottom_elem.innerHTML = providePageBottomShadow(bg_color.toString());
}

function providePageBottomShadow(bg_color)
{
	var shadow_code = "<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">";
	var gradient_colors = extractGradientColors(bg_color);

	for( var i=0; i<gradient_colors.length; i++ )
	{
		shadow_code += "<tr>";
		shadow_code += "<td width=\"100%\" height=\"1\" bgcolor=\"#"+gradient_colors[i]+"\"><img src=\""+emptyIconUrl+"\" alt=\"\"/></td>";
		shadow_code += "</tr>";
	}

	shadow_code += "</table>";
	return shadow_code;
}

// The color format is "rgb(rrr, ggg, bbb)" or "#rrggbb"
function extractRGB(color)
{
	var rgb = new stringArray(3, 0);
	
	if( color.charAt(0)=='#' )
	{
		rgb[0] = parseInt(color.substring(1, 3), 16);
		rgb[1] = parseInt(color.substring(3, 5), 16);
		rgb[2] = parseInt(color.substring(5, 7), 16);
	}
	else
	{
		var first_comma = color.indexOf(",");
		var second_comma = color.substring(first_comma+1).indexOf(",") + first_comma + 1;

		rgb[0] = parseInt(color.substring(4, first_comma));
		rgb[1] = parseInt(color.substring(first_comma+1, second_comma));
		rgb[2] = parseInt(color.substring(second_comma+1, color.indexOf(")")));
	}
	return rgb;
}

function extractGradientColors(color)
{
	var gradient_colors = new stringArray(7, '000000');
	var rgb = extractRGB(color);
	var max_red = rgb[0];
	var max_green = rgb[1];
	var max_blue = rgb[2];
	var red = 0;
	var green = 0;
	var blue = 0;

	red += max_red / 2;
	green += max_green / 2;
	blue += max_blue / 2;
	gradient_colors[1] = toHex(red) + toHex(green) + toHex(blue);

	red += max_red / 8;
	green += max_green / 8;
	blue += max_blue / 8;
	gradient_colors[2] = toHex(red) + toHex(green) + toHex(blue);
	
	red += max_red / 8;
	green += max_green / 8;
	blue += max_blue / 8;
	gradient_colors[3] = toHex(red) + toHex(green) + toHex(blue);

	red += max_red / 10;
	green += max_green / 10;
	blue += max_blue / 10;
	gradient_colors[4] = toHex(red) + toHex(green) + toHex(blue);

	red += max_red / 13;
	green += max_green / 13;
	blue += max_blue / 13;
	gradient_colors[5] = toHex(red) + toHex(green) + toHex(blue);

	red += max_red / 19;
	green += max_green / 19;
	blue += max_blue / 19;
	gradient_colors[6] = toHex(red) + toHex(green) + toHex(blue);

	return gradient_colors;
}

function stringArray(n, init)
{
	this.length = n;
	for( var i=0; i<n; i++ )
		this[i] = init;
	return this;
}

var hexchars = '0123456789ABCDEF';

function toHex(num)
{
	return hexchars.charAt(num >> 4) + hexchars.charAt(num & 0xF);
}
