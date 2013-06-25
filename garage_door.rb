require 'sinatra'

class GarageDoor < Sinatra::Base
  set :root, File.dirname(__FILE__)
  get '/' do
    @status = 'derp'
    "The garage door is currently: #{@status}"
  end
end
