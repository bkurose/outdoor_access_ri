class User < ApplicationRecord
    has_many :water_access_comments, dependent: :destroy
    has_many :water_access_ratings, dependent: :destroy
    has_many :water_access_collaborators, dependent: :destroy
    has_many :water_access_points, through: :water_access_collaborators
    has_many :water_access_images

    validates :first_name, presence: true, length: {minimum: 1, maximum: 64}
    validates :last_name, presence: true, length: {minimum: 1, maximum: 64}
    validates :username, presence: true, uniqueness: true, length: {minimum: 6, maximum: 32}
    validates :password, presence: true, length: {minimum: 8, maximum: 32}, confirmation: true
    validates :email, presence: true, uniqueness: true, length: {minimum: 6, maximum: 120}

    before_save :downcase_email
    has_secure_password

    private

    def downcase_email
        self.email = email.downcase
    end
end
