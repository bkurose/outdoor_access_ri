class WaterAccessImageSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :water_access_point_id, :image_url
end
