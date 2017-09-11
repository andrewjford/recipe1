class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception

  before_action :authenticate

  def logged_in?
    !!current_user
  end

  def current_user
    @current_user ||= User.find(auth["user"]) if auth_present?
  end

  def authenticate
    render json: {error: "unauthorized"}, status: 401 unless logged_in?
  end

  def index
    @ingredients = Ingredient.all
    @recipes = Recipe.all
    render 'home/index'
  end

  private

  def auth_present?
    !!request.env.fetch("HTTP_AUTHORIZATION","").scan(/Bearer/).flatten.first
  end

  def auth
    Auth.decode(token)
  end

  def token
    request.env["HTTP_AUTHORIZATION"].scan(/Bearer (.*)$/).flatten.last
  end
end
