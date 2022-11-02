class WaterAccessRating < ApplicationRecord
    belongs_to :user
    belongs_to :water_access_point

    validates :user_id, presence: true
    validates :water_access_point_id, presence: true
    validates :rating, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 5 }
end
