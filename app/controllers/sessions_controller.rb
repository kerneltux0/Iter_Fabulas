class SessionsController < ApplicationController

  def create
    @user = User.find_by(username:session_params[:username])
    if @user && @user.authenticate(session_params[:password])
      login!
      render json: {
        logged_in: true,
        user: @user
      }
    else
      render json: {
        status: 401,
        error: 'Not a valid user, try again'
      }
    end
  end

end