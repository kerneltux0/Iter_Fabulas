class StoriesController < ApplicationController

  def index
    @stories = Story.all
    render json: {
      stories: @stories
    }
  end

  def create
    @story = Story.new(story_params)
    if @story.save
      render json: {
        story: @story
      }
    end

  end

  private
    def story_params
      params.require(:story).permit(:title,:name,:location,:content,:likes)
    end

end