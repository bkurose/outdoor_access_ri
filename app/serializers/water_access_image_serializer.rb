class WaterAccessImageSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :water_access_point_id, :file_url
end