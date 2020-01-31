class CreateStories < ActiveRecord::Migration[5.2]
  def change
    create_table :stories do |t|
      t.string :title
      t.string :location
      t.string :content
      t.integer :likes

      t.timestamps
    end
  end
end
