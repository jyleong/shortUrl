require 'rails_helper'

RSpec.describe 'UrlShorten API', type: :request do
    # initialize test data 
    let!(:urlShortens) { create_list(:url_shorten , 10) }
    let(:origUrl) { urlShortens.first.originalUrl}
    let(:urlCode) { urlShortens.first.urlCode }
  
    # Test suite for GET /todos
    describe 'GET /api/item' do
        before { get '/api/item' }

        it 'returns all shortened urls' do
            # Note `json` is a custom helper to parse JSON responses
            expect(json).not_to be_empty
            expect(json.size).to eq(10)
        end

        it 'returns status code 200' do
            expect(response).to have_http_status(200)
        end
    end

    # Test suite for GET /todos/:id
  describe 'GET /api/item/:urlCode' do
    before { get "/api/item/#{urlCode}" }

    context 'when the record exists' do
      it 'returns the UrlShorten original Url' do
        expect(response).to redirect_to(origUrl)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(302)
      end
    end

    context 'when the record does not exist' do
      let(:urlCode) { 100 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find shortUrl/)
      end
    end
  end

  # Test suite for POST /api/item
  describe 'POST /api/item' do
    # valid payload
    let(:valid_attributes) { { originalUrl: 'www.example.com/foo.html', shortUrl: 'localhost' } }

    context 'when the request is valid' do
      before { post '/api/item', params: valid_attributes }

      it 'creates a UrlShorten' do
        expect(json['originalUrl']).to eq('www.example.com/foo.html')
        expect(json['shortUrl']).to eq('localhost')
        
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end

      it 'returns status code 200 when shortened url already exists' do
        post '/api/item', params: valid_attributes
        expect(response).to have_http_status(200)
        expect(json['originalUrl']).to eq('www.example.com/foo.html')
        expect(json['shortUrl']).to eq('localhost')
      end
    end

    context 'when the request is invalid' do
      before { post '/api/item', params: { originalUrl: 'Foobar' } }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

      it 'returns a validation failure message' do
        expect(response.body)
          .to match(/Validation failed: Shorturl can't be blank/)
      end
    end
    
  end
end