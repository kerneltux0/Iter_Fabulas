class Story < ApplicationRecord
  has_many :comments
  validates :title, presence: true
  validates :content, presence: true
  validates :location, presence: true
  validates :name, presence: true
end
