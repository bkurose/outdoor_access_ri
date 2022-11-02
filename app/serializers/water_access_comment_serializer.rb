class WaterAccessCommentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :water_access_point_id, :comment
end
