class RecipesController < ApplicationController

  def index
    @recipes = Recipe.all
    render json: @recipes.to_json(include: {recipe_line_items: {include: :ingredient}})
  end

  def create
    @recipe = Recipe.new(recipe_params)
    if @recipe.save
      render json: @recipe.to_json(include: {recipe_line_items: {include: :ingredient}})
    else
      render json: @recipe.errors
    end

  end

  private

  def recipe_params
    params.require(:recipe).permit(:name, :description,
     :recipe_line_items_attributes => [:quantity, :ingredient_attributes => [:name]])
  end
end
