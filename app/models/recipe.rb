class Recipe < ApplicationRecord
  has_many :recipe_line_items
  has_many :ingredients, through: :recipe_line_items

  accepts_nested_attributes_for :recipe_line_items

  validates :name, presence: true

  # def lines=(lines)
  #   binding.pry
  #   # loop through line items
  #   lines.each do |line_item|
  #     ingredient = Ingredient.find_or_create_by(name: line_item["ingredient"])
  #     self.recipe_line_items.create(quantity: line_item["quantity"], ingredient: ingredient)
  #   end
  # end

end
