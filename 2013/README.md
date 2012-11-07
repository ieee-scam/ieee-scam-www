# How to write content for the site
## First time installation
Make sure you have ``ruby`` installed (version 1.8.7 or 1.9.x).

Install the one `gem` needed:

	[sudo] gem install redcarpet 

If this fails, try running it with `sudo`. If it fails during compilation of the native libraries, make sure you have the [Command Line Tools for Xcode installed](https://developer.apple.com/downloads). 

Hereafter, just clone the github project into a directory.

	$ git clone git@github.com:ieee-scam/ieee-scam-www.git
	
And make sure you are on the gh-pages branch:

	$ git checkout gh-pages
	
After this use regular git commands to commit, push, and pull your changes.

## Changing the text of an existing page
Say you want to change the page ``2013/CFP/Details.html`` (which can have a different title in the menu, so look at the URL). 

Find the ``2013/CFP/Details.md`` file and open it using a text editor (or perhaps a Markdown editor). You can now freely edit the file, as long as you keep it markdown (HTML nesting is allowed).

Go to the command line, go to the ``2013`` directory and run ``make`` (only on OSX and Linux) or ``ruby build.rb`` to rebuild the HTML files. 

Now commit (and push) both the ``.md`` and the ``.html`` file. After a few minutes, the changes should appear on the site.

## Adding a new page
Adding a new page (``2013/Event/Travel.html``) takes four steps:

1. Create the file ``2013/Event/Travel.md`` and give it at least a title (example: ``# Title``)
2. Add a link to the file to the ``2013/menu.txt``, the position of the line has a influence on where it appears in the menu.
3. Build using ``make`` or ``ruby build.rb``.
3. Commit and push the changes.

## Adding announcements
To edit announcements, edit the ``2013/announce.md`` file and rebuild.

## Committing changes
Get the latest version first:

	git pull

Make your changes as explained above.

Commit all your changes:

	git commit -a -m "Commit message"

Share your changes:

	git push
	
if this fails, try to pull again:

	git pull

and then push.

For more info about git see: [Introduction to Git](http://learn.github.com/p/intro.html). 

# SCAM site architecture (for future developers)

- Ruby build script.
- Build static HTML files, no fancy javascript client-side loading
- One template, dynamic menu and dynamic main content
- Content in markdown


## Template language
Simple: 

- ```<!-- Menu -->``` : replace with generated menu
- ```<!-- Content -->``` : replace with compiled content
- ``` <!-- Title -->``` : replace with title
- ``` <!-- Announcement -->``` : replace with list of announcements
- ``` <!-- RootDir -->``` : replace either the relative or the absolute root path 

## Menu/file structure

	menu.txt				// list of .md files to determine order of the menu
	dir\  					// submenu 
	dir\index.md			// markdown content of the submenu <dir> page
	dir\index.html			// generated file
	dir\dates.md 			// markdown content for dates subpage
	dir\dates.html			// generated file

The ``menu.txt`` file contains a flat list of all the files which should be in the menu, this is important for the order of the menu items.

## Markdown structure
The file must always begin with a title, this title is not shown on the page, but is used for the menu and the page title in html.
