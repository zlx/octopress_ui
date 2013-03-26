require 'rubygems'
require 'sinatra'

get '/' do
  erb :index
end

post '/' do
  File.open("#{params[:title]}", 'w') do |f|
    f.write params[:content]
  end
  'update success'
end
