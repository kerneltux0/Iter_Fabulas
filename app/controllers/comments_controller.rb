class CommentsController < ApplicationController

  def create
    @story = Story.find(params[:id])
    @comment = Comment.new(comment_params)
    @story.comments << @comment
    @comment.save
    @story.save
    render json: {
      comment: @comment
    }

  end

  def index

  end

  private
  def comment_params
    params.require(:comment).permit(:content)
  end

end