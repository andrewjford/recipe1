class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception

  include ActionController::HttpAuthentication::Basic::ControllerMethods
  include ActionController::HttpAuthentication::Token::ControllerMethods

  # before_action :authenticate_user_from_token, except: [:token]
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
