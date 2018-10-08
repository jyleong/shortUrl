FactoryBot.define do
    factory :url_shorten do
        originalUrl { Faker::Internet.url }
        shortUrl { Faker::Internet.url('http://localhost')}
        urlCode { Faker::Lorem.characters(10) }
    end
end