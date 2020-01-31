class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token

  helper_method :login!, :logged_in?, :logout!, :current_user, :authorized_user?

  def login!
  end

  def logged_in?
  end

  def logout!
  end

  def current_user
  end

  def authorized_user?
  end
end
