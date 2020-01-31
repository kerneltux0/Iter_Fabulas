class User < ApplicationRecord
  has_secure_password
  has_many :stories
  has_many :comments, through: :stories
  validates :username, presence: true
  validates :username, uniqueness: true
  validates :password, presence: true
end
