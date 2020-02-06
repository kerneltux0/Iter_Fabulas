class StoriesController < ApplicationController

  def index
    @stories = Story.all
    render json: {
      stories: @stories
    }
  end
end