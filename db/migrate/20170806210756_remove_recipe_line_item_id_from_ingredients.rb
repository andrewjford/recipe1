class RemoveRecipeLineItemIdFromIngredients < ActiveRecord::Migration[5.1]
  def change
    remove_column :ingredients, :recipe_line_item_id
  end
end
