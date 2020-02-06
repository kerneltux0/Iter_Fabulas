class StoriesController < ApplicationController

  def index
    @stories = Stories.all
    render json: {
      stories: @stories
    }
  end
end