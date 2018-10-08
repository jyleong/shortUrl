Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  
  # UrlCode Resource
  post 'api/item', to: 'url#createShortUrl'
  get 'api/item', to: 'url#index'
  get 'api/item/:urlCode', to: 'url#getUrlCode'

  get 'api/test', to: 'url#test'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
