class CreateShows < ActiveRecord::Migration[6.1]
  def change
    create_table :shows do |t|
      t.string :venue
      t.string :date
      t.integer :cover
      t.text :info

      t.timestamps
    end
  end
end
