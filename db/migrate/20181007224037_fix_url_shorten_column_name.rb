class FixUrlShortenColumnName < ActiveRecord::Migration[5.2]
  def change
    change_table :url_shortens do |t|
      t.rename :originLUrl, :originalUrl
    end
  end
end
