///// JavaScript Navigation for index /////

// Variables from setup-index.js: nextIndexPageUrl, prevIndexPageUrl, parentIndexPageUrl, firstIndexPageUrl, lastIndexPageUrl 

function nextPage() 
{
	gotoUrl( nextIndexPageUrl );
}

function prevPage() 
{
	gotoUrl( prevIndexPageUrl );
}

function upPage() 
{
	gotoUrl( parentIndexPageUrl );
}

function firstPage() 
{
	gotoUrl( firstIndexPageUrl );
}

function lastPage() 
{
	gotoUrl( lastIndexPageUrl );
}
