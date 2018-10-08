class UrlShorten < ApplicationRecord

    # validations
    validates_presence_of :originalUrl, :shortUrl, :urlCode
end
