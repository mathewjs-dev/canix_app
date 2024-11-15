class CreateProducts < ActiveRecord::Migration[7.1]
  def change
    create_table :products do |t|
      t.string :product_id, null: false
      t.datetime :date, null: false
      t.decimal :weight, null: false, precision: 10, scale: 3
      t.string :unit, null: false
      t.string :category, null: false

      t.timestamps
    end
  end
end
