class User < ApplicationRecord
    has_many :water_access_comments, dependent: :destroy
    has_many :water_access_ratings, dependent: :destroy
    has_many :water_access_collaborators, dependent: :destroy
    has_many :water_access_points, through: :water_access_collaborators
end
