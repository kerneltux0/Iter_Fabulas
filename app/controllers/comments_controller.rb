class CommentsController < ApplicationController

  def create
    @story = Story.find(params[:id])
    @comment = Comment.new(comment_params)
    if @comment.save
      @story << @comment
      @story.save
    end
    render json: {
      comment: @comment
    }

  end

  private
  def comment_params
    params.require(:comment).permit(:content)
  end

end