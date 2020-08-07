class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :group_users
  has_many :groups, through: :group_users
  has_many :messages
  has_many :tweets
  has_many :likes,dependent: :destroy
  has_many :like_tweets,through: :likes,source: :tweet
  has_many :comments
  has_many :follower, class_name:"Relationship",foreign_key: "follower_id",dependent: :destroy
  has_many :followed, class_name:"Relationship",foreign_key: "followed_id",dependent: :destroy
  has_many :following_user, through: :follower, source: :followed 
  has_many :follower_user, through: :followed, source: :follower
  validates :name, presence: true, uniqueness: true
  validates :image, presence: true
  mount_uploader :image,ImageUploader

  def follow(user_id)
    follower.create(followed_id:user_id)
  end

  def unfollow(user_id)
    follower.find_by(followed_id:user_id).destroy
  end

  def following?(user)
    following_user.include?(user)
  end

  # def already_liked?(post)
  #   likes.exists?(post_id:post.id)
  # end
end
