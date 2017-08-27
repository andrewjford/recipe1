class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def authorize_user
    redirect_to '/login' unless current_user
  end

  def index
    @ingredients = Ingredient.all
    @recipes = Recipe.all
    render 'home/index'
  end
end
