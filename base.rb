# myapp.rb
require 'sinatra'
require 'HTTParty'
require	'json'
require 'csv'
require "awesome_print"
# require 'sinatra/reloader'

get '/' do
	# notes
  # @data = JSON.parse(HTTParty.get('https://data.nasa.gov/resource/gh4g-9sfh.json').body)

  erb :index
end

get '/tables' do
	@table1_data = CSV.read("public/data_sets/csv/Energy_Statistics_2009.csv")
	@table3_data = CSV.read("public/data_sets/csv/enigma-us.gov.eia.seds.joined.csv")
	@table2_data = CSV.read("public/data_sets/csv/enigma-us.states.ny.cities.nyc.electricity-consumption.2010.csv", headers: true)
	@table4_data = CSV.read("public/data_sets/csv/enigma-us.gov.senate.publicrecords.lobbying.issue.csv")


	erb :tables
end

get"/graphs" do
  @graph1_data = CSV.read("public/data_sets/csv/enigma-gov.eu.eurostats.tb.t-envir.t-nrg.t-nrg-quant.ten00082-10d5bc224875239455fe744da71a31d0.csv")
	erb :graphs
end

get '/hello/:name' do
  # matches "GET /hello/foo" and "GET /hello/bar"
  # params['name'] is 'foo' or 'bar'
  "Hello #{params['name']}!"
end