# frozen_string_literal: true

class HelloWorldController < ApplicationController
  layout "hello_world"

  def index
    @url_shortener_props = { isLoading: false, hasError: false, data: {} }
  end
end
