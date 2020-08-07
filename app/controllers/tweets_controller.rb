class TweetsController < ApplicationController
  def index
    @tweets = Tweet.all
    @tweet = Tweet.new
    # @like = Like.new
  end

  

  def new
    @tweet = Tweet.new
  end


  def create
    @tweet = Tweet.new(tweet_params)
    if @tweet.save
      redirect_to tweets_path
      
    else
      @tweets = Tweet.all
      flash.now[:alert] = 'メッセージを入力してください。'
      render :index
    end
  end

  def show
    @tweet = Tweet.find(params[:id])
    @comment = Comment.new
    @comments = @tweet.comments.includes(:user)
    # @like = Like.new
  end

  private
  def tweet_params
    params.require(:tweet).permit(:image,:text).merge(user_id:current_user.id)
  end
end
