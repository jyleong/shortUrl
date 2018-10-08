class CreateUrlShortens < ActiveRecord::Migration[5.2]
  def change
    create_table :url_shortens do |t|
      t.string :originLUrl
      t.string :shortUrl
      t.string :urlCode

      t.timestamps
    end
  end
end
