class WaterAccessPointSerializer < ActiveModel::Serializer
  attributes :id, :name, :lat, :long, :type, :description, :dogs, :town, :trail_map, :handicap_accessible, :details, :traffic

  has_many :water_access_comments
  has_many :water_access_images
  has_many :water_access_collaborators
  has_many :water_access_ratings
end
