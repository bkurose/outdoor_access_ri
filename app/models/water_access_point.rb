class WaterAccessPoint < ApplicationRecord
    has_many :water_access_comments, dependent: :destroy
    has_many :water_access_ratings, dependent: :destroy
    has_many :water_access_collaborators, dependent: :destroy
    has_many :users, through: :water_access_collaborators
    has_many :images, dependent: :destroy
end
