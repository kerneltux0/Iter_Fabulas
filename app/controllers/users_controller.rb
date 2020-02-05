class UsersController < ApplicationController
  def create
    pry
    @user = User.create(user_params)
    if @user.save
      login!
      render json: {
        status: :created,
        user: @user
      }
    else
      render json: {
        status: 500,
        error: @user.errors.full_message
      }
    end
  end

  private

  def user_params
    params.require(:user).permit(:username,:password,:password_confirmation)
  end
end
