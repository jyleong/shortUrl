# spec/models/url_shorten_spec.rb
require 'rails_helper'

# Test suite for the UrlShorten model
RSpec.describe UrlShorten, type: :model do
  # Association test
  # ensure UrlShorten model has a 1:m relationship with the X model
  
  # Validation tests
  # ensure columns originalUrl, shortUrl and urlCode are present before saving
  it { should validate_presence_of(:originalUrl) }
  it { should validate_presence_of(:shortUrl) }
  it { should validate_presence_of(:urlCode) }
end