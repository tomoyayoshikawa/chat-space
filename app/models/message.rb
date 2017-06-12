class Message < ApplicationRecord
  belongs_to :user
  belongs_to :group
  validates :body, presence: {if: 'image.blank?'}
  mount_uploader :image, ImageUploader
end
