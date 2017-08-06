class IngredientsController < ApplicationController
  def index
    @ingredients = Ingredient.all
    render json: @ingredients
  end

  def create
    @ingredient = Ingredient.new(ingredient_params)
    if @ingredient.save
      render json: @ingredient
    else
      render json: {status: "error", code: 4000, message: "name required to create ingredient"}
    end
  end



  private

  def ingredient_params
    params.require(:ingredient).permit(:name)
  end
end
