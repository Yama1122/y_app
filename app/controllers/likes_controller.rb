class LikesController < ApplicationController
  before_action :set_variables
  # before_action :set_tweet,only: [:create,:destroy]

  def like
    like = current_user.likes.new(tweet_id:@tweet.id)
    like.save
    # Like.create(tweet_id:tweet.id)
  end

  def unlike
    like =current_user.likes.find_by(tweet_id:@tweet.id)
    like.destroy
  end

  private

  def set_variables
    @tweet = Tweet.find(params[:tweet_id])
    @id_name = "#like-link-#{@tweet.id}"
    @id_heart = "#heart-#{@tweet.id}"
  end

  # def create
  #   @like = current_user.likes.create(tweet_id:params[:tweet_id])
  #   redirect_to tweet_path(@tweet)
  # end

  # def destroy
  #   @like = Like.find_by(tweet_id:params[:post_id],user_id:current_user.id)
  #   @like.destroy
  #   redirect_to post_path(@post)
  # end

  # private
  # def set_tweet
  #   @tweet = Tweet.find(params[:tweet_id])
  # end
  

end
