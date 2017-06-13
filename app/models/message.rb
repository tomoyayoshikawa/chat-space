class Message < ApplicationRecord
  belongs_to :user
  belongs_to :group
  validates :body, presence: {if: 'image.blank?'}
  validates :image, presence: {if: 'body.blank?'}
  validates :user_id, presence: true
  validates :group_id, presence: true
  mount_uploader :image, ImageUploader
end
