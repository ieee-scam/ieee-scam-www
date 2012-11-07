require 'rubygems'
require 'redcarpet'
require 'set'

#$ROOT_DIR="/ieee-scam-www/2013/"
$ROOT_DIR="/2013/"
$TEMPLATE="newtemplate.html"

@menu_list = File.read("menu.txt").split(/[\n\r]+/)
found_list = Dir.glob("**/*.md") - ["announce.md", "README.md"]
forgotten_files = Set::new(found_list) - Set::new(@menu_list)
missing_files = Set::new(@menu_list) - Set::new(found_list)

if not forgotten_files.empty?
	puts "Warning: These files were not in the menu, but will be compiled"
	forgotten_files.each { |f| puts "\t#{f}" }
end
if not missing_files.empty?
	puts "Error: These files listed in the menu do not exists:"
	missing_files.each { |f| puts "\t#{f}" }
	fail "Files missing"
end

# smarty pants extension
class HTMLWithPants < Redcarpet::Render::HTML
  include Redcarpet::Render::SmartyPants
end
@@markdown = Redcarpet::Markdown.new(HTMLWithPants,
	:autolink => true, 
	:space_after_headers => true, 
	:fenced_code_blocks => true, 
	:lax_spacing => true)

class MenuItem
	attr_accessor :title, :path, :childs

	def is_leaf?
		not @childs 
	end

	def to_s
		# debug printing
		if is_leaf?
			return @path + "\t" + @title
		else
			return @path + "\t" + @title +"\n\t" + @childs.map{|c| c.to_s.gsub("\n","\n\t") }.join("\n\t") 
		end
	end
	

	def initialize(filename)
		content = @@markdown.render(File.read(filename))
		if content.match(/<h1>([^<]+)<\/h1>/)
			@title = $1
		else
			puts "Error: file #{filename} does not have a title"
			fail "Title Missing"
		end
		@path = filename
	end
end


def build_menu_tree(root, f_index)
	result = []
	while f_index < @menu_list.size
		f = @menu_list[f_index]
		c_dir, c_file = File.split(f)
		if c_dir != root && root != "." && !c_dir.start_with?(root)
			return [f_index, result]
		elsif ((root == "." && c_dir != root) || ((c_dir != root) && c_dir.start_with?(root)))
			m = MenuItem.new(f)
			f_index, childs = build_menu_tree(c_dir, f_index + 1)
			m.childs = childs if childs && childs.size > 0
			result << m
		else 
			m = MenuItem.new(f)
			f_index += 1
			result << m
		end
	end
	return [f_index, result]
end


def create_menu_item(i, current_file)
	result = "<a href=\"#{$ROOT_DIR}#{i.path.sub(".md",".html")}\" class=\"#{i.path == current_file ? "current" : ""}\">#{i.title}</a>"
	if not i.is_leaf? 
		c_dir, c_file = File.split(current_file)
		i_dir, i_file = File.split(i.path) 
		if c_dir.start_with?(i_dir)
			result << create_menu(i.childs, current_file)
		end
	end
	return result
end
def create_menu(items, current_file)
	"<ul>
		#{items.map { |i| "<li>#{create_menu_item(i, current_file)}</li>" }.join("\n")}
	</ul>
	"
end

puts "Preparing menu and checking files"
i, menu = build_menu_tree(".", 0)

puts "Rebuilding pages"
template = File.read($TEMPLATE)
announcements = @@markdown.render(File.read("announce.md"))

found_list.each do |f|
	puts "Building #{f}"
	content_html = @@markdown.render(File.read(f))
	title_html = ""
	if content_html.match(/<h1>([^<]+)<\/h1>/)
		title_html = $1
	else
		puts "Error: file #{f} does not have a title"
		fail "Title Missing"
	end
	content_html.sub!(/<h1>[^<]+<\/h1>/, "") # remove h1 which is used for title
	menu_html = create_menu(menu, f)

	result = template.gsub("<!-- Title -->", title_html).gsub("<!-- Menu -->", menu_html).gsub("<!-- Announcement -->", announcements).gsub("<!-- Content -->", content_html).gsub("<!-- RootDir -->", $ROOT_DIR)
	File.open(f.sub(".md", ".html"), "w") { |h| h.write(result) }
end
puts "Succesfully rebuild all pages"
