# myapp.rb
require 'sinatra'
require 'HTTParty'
require	'json'
# require 'sinatra/reloader'

get '/' do
	# notes
  # @data = JSON.parse(HTTParty.get('https://data.nasa.gov/resource/gh4g-9sfh.json').body)

  erb :index
end

get '/tables' do
  erb :tables

end
get"/graphs" do 
	erb :graphs

end

get '/hello/:name' do
  # matches "GET /hello/foo" and "GET /hello/bar"
  # params['name'] is 'foo' or 'bar'
  "Hello #{params['name']}!"
end