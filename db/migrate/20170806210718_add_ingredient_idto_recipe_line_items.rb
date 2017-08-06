class AddIngredientIdtoRecipeLineItems < ActiveRecord::Migration[5.1]
  def change
    add_column :recipe_line_items, :ingredient_id, :integer
  end
end
