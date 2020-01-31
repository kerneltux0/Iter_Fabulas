class User < ApplicationRecord
  has_secure_password
  has_many :stories
  has_many :comments, through: :stories
end
