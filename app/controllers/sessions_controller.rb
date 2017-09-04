class SessionsController < ApplicationController
  skip_before_action :authenticate

  def new
  end

  def create
    user = User.find_by(email: auth_params[:email])

    if user && user.authenticate(auth_params[:password])
      jwt = Auth.issue({user: user.id})
      render json: {jwt: jwt}
    else
    end
  end

  private
  def auth_params
    params.require(:auth).permit(:email, :password)
  end
end
