class Tweet < ApplicationRecord
  belongs_to :user
  has_many :comments
  has_many :likes,dependent: :destroy
  has_many :liking_users,through: :likes,source: :user
  mount_uploader :image,ImageUploader
  validates:text,presence:true, unless: :image?

  def like_user(user_id)
    likes.find_by(user_id:user_id)
  end
end
