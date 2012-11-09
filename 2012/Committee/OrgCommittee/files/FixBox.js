function blocks_getStyle(el, style) 
{
	if (!el) return "1em";
	if ((el.style.lineHeight) && (style == 'line-height')) return el.style.lineHeight;
	if (document.defaultView) return document.defaultView.getComputedStyle(el, null).getPropertyValue(style);
	if ((el.currentStyle) && (style == 'line-height')) return el.currentStyle.lineHeight;
	return "1em";
}

function blocks_getSuffix(s) {
	return s.substring(s.length-2, s.length);
}

function blocks_resize(e, depth)
{
	if (!e) return;
	if ((e.nodeType == 1) && (e.tagName != 'BR')) {
		fs = blocks_getStyle(e, 'font-size');
		lh = blocks_getStyle(e, 'line-height');
		e.style.fontSize   = "" + (parseFloat(fs) * 0.96) + blocks_getSuffix(fs);
		e.style.lineHeight = "" + (parseFloat(lh) * 0.96) + blocks_getSuffix(lh);
	}    
	blocks_resize(e.firstChild, depth + "- ");
	blocks_resize(e.nextSibling, depth); 
}

function blocks_fixBox(id)
{
	var outside = document.getElementById(id + "_outside");
	var inside  = document.getElementById(id + "_inside");
	if ((!outside) && (!inside)) return;	
	var outsideHeight = parseFloat(outside.style.height);
	var insideHeight = inside.offsetHeight;
	if ((!outsideHeight) && (!insideHeight)) return;
	var count = 0;
	while ((insideHeight > outsideHeight) && (count < 15)) {
		blocks_resize(outside.firstChild);
		insideHeight = inside.offsetHeight;
		count++;
	}
}

function blocks_growparent (id)
{
	var maxsize = 0;
	var p = document.getElementById(id);
	var e = p.firstChild;
	while (e) {
		//blocks_dummy.innerHTML =  maxsize;
		b = e.offsetTop + e.offsetHeight;
		if (maxsize < b) {
			maxsize = b;
		}
		e = e.nextSibling;
	}
	var h = parseFloat(p.style.height);
	if (h < maxsize) {
		p.style.height = maxsize + 'px';
	}
}