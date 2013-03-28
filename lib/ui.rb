require 'rubygems'
require 'sinatra'
require 'sanitize'
require 'ruby-pinyin'

get '/' do
  erb :index
end

post '/' do
  return 'error' if params[:title] == "" || params[:content] == ""
  title = PinYin.permlink(params[:title])
  File.open("#{Time.now.strftime('%Y-%m-%d')}-#{title}.markdown", 'w') do |file|
    file.puts "---"
    file.puts "layout: post"
    file.puts "title: #{params[:title]}"
    file.puts "---"
    file.puts ""
    
    lines = Sanitize.clean(params[:content], elements: ['br']).split("<br>")
    lines.each do |line|
      file.puts line
    end
  end
  "update_success"
end
