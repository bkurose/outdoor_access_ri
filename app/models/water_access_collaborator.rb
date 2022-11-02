class WaterAccessCollaborator < ApplicationRecord
    belongs_to :user
    belongs_to :water_access_point
end
