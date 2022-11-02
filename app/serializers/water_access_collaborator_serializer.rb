class WaterAccessCollaboratorSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :water_access_point_id, :full_edit
end
