class User < ApplicationRecord
  has_secure_password
  validates :email, uniqueness: true

  before_create -> {self.auth_token = SecureRandom.hex}
end