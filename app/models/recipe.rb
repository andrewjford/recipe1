class Recipe < ApplicationRecord
  has_many :recipe_line_items
  has_many :ingredients, through: :recipe_line_items

  validates :name, presence: true
end
