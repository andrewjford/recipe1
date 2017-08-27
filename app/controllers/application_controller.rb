class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  include ActionController::HttpAuthentication::Basic::ControllerMethods
  include ActionController::HttpAuthentication::Token::ControllerMethods

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

  def token
    authenticate_with_http_basic do |email, password|
      user = User.find_by(email: email)
      if user && user.authenticate(password)
        render json: {token: user.auth_token}
      else
        render json: {error: 'Incorrect credentials'}, status: 401
      end
    end
  end
end
