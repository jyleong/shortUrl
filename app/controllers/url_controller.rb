require 'securerandom'

class UrlController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_url_shorten, only: [:getUrlCode]

  # GET /api/item <- get all
  def index
    @allUrls = UrlShorten.all
    json_response(@allUrls)

  end

  # POST /api/item
  def createShortUrl
    url_params = url_shorten_params
    originalUrl = url_params[:originalUrl]
    urlShorten = UrlShorten.find_by(originalUrl: originalUrl)
    if urlShorten 
      return json_response(urlShorten, :ok)
    end

    url_params[:urlCode] = SecureRandom.hex(10)[0,10]
    @shortUrl = UrlShorten.create!(url_params)

    json_response(@shortUrl, :created)
  end

  # GET /api/item/:urlCode
  def getUrlCode
    if not @urlShorten.nil?
      redirect_to @urlShorten[:originalUrl]
    else
      return json_response({message: "Couldn't find shortUrl"},:not_found)
    end
  end

  def test
    render json: 'test ok', status: 200
  end

  private

  def url_shorten_params
    # whitelist params
    params.permit(:originalUrl, :shortUrl)
  end

  def set_url_shorten
    @urlShorten = UrlShorten.find_by(urlCode: params[:urlCode])
  end
end
