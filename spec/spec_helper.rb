require 'rubygems'
require 'sinatra'
require 'rspec'
require 'rack/test'
require_relative '../config/boot'
require_relative '../garage_door'

Sinatra::Application.environment = :test
Bundler.require :default, Sinatra::Application.environment

RSpec.configure do |config|
  config.include Rack::Test::Methods
end

def app
  Sinatra::Application
end
