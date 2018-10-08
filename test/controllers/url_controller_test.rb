require 'test_helper'

class UrlControllerTest < ActionDispatch::IntegrationTest
  test "should get createShortUrl" do
    get url_createShortUrl_url
    assert_response :success
  end

end
