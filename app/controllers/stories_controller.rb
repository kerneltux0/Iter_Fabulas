class StoriesController < ApplicationController

  def index
    @stories = Story.all
    render json: {
      stories: @stories
    }
  end

  def create
    pry
    
  end

  def show
    pry
  end

end