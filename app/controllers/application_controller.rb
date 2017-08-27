class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception

  include ActionController::HttpAuthentication::Basic::ControllerMethods
  include ActionController::HttpAuthentication::Token::ControllerMethods

  before_action :authenticate_user_from_token, except: [:token, :index]

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

  private

  def authenticate_user_from_token
    unless authenticate_with_http_token { |token, options| User.find_by(auth_token: token) }
      render json: { error: 'Bad Token'}, status: 401
    end
  end
end
