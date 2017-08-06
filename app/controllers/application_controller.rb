class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def index
    @ingredients = Ingredient.all
    render 'home/index'
  end
end