class RecipesController < ApplicationController

  def index
    @recipes = Recipe.all
    render json: @recipes.to_json(include: {recipe_line_items: {include: :ingredient}})
  end
end
