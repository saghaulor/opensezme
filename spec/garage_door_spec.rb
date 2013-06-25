require 'spec_helper'

describe 'Garage Door app' do
  describe '/' do
    it 'shows the status of the door' do
      get '/'
      #expect(last_response).to be_ok
      expect(last_response.body).to eq(/The garage door is currently: \w/)
    end
  end
end
