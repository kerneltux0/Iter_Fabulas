class CreateStories < ActiveRecord::Migration[5.2]
  def change
    create_table :stories do |t|
      t.string :name
      t.string :title
      t.string :location
      t.string :content
      t.integer :likes
    end
  end
end
