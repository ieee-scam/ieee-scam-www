require 'webrick'
root = "."
server = WEBrick::HTTPServer.new :Port => 8000, :AccessLog => [], :DocumentRoot => root
trap 'INT' do server.shutdown end
server.start
