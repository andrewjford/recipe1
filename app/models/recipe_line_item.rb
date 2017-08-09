class RecipeLineItem < ApplicationRecord
  belongs_to :recipe
  belongs_to :ingredient

  accepts_nested_attributes_for :ingredient

  def autosave_associated_records_for_ingredient
    self.ingredient = Ingredient.find_or_create_by(name: ingredient.name)
  end
end
