class WaterAccessRating < ApplicationRecord
    belongs_to :user
    belongs_to :water_access_point

    validates :user_id, presence: true
    validates :water_access_point_id, presence: true
    validates :rating, presence: true
end
