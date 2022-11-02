class WaterAccessImage < ApplicationRecord
    belongs_to :water_access_point
    belongs_to :user

    validates :user_id, presence: true
    validates :water_access_point_id, presence: true
    validates :file_url, presence: true
end
