class UsersController < ApplicationController
  skip_before_action :authenticate, only: [:create]

  def new

  end

  def create
    user = User.new(user_params)
    binding.pry
    if user.save
      session[:user_id] = user.id
      redirect_to '/'
    else
      redirect_to '/signup'
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end
