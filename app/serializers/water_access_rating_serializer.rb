class WaterAccessRatingSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :water_access_point_id, :rating
end
