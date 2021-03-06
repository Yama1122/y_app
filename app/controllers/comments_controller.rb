class CommentsController < ApplicationController
  def create
    @comment = Comment.create(comment_params)
    redirect_to tweet_path(params[:tweet_id])
  end


  def show
    @comment = Comment.new
    @comments = Tweet.find(params[:id]).comments.includes(:user)
  end

  private
    def comment_params
      params.require(:comment).permit(:text).merge(user_id:current_user.id,tweet_id:params[:tweet_id])
    end
end
