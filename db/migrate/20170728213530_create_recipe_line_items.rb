class CreateRecipeLineItems < ActiveRecord::Migration[5.1]
  def change
    create_table :recipe_line_items do |t|
      t.integer :recipe_id
      t.string :quantity

      t.timestamps
    end
  end
end
