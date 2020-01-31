class UserController < ApplicationController
  def create
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
end
