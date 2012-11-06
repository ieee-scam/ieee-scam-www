# SCAM site architecture

- Ruby build script.
- Just one scripting language (ruby?)
- Build static HTML files, no fancy javascript client-side loading
- One template, dynamic menu and dynamic main content
- Content in markdown


## Ruby packages
### Markdown

- kramdown: good fast pure ruby markdown -> HTML, does deviate from the github markdown syntax in a few small ways
- Redcarpet2: fast ruby parser, the one used in github, UTF8 aware, has some native libraries, but is very simple, no special depencencies.

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
