class WaterAccessPointIndexSerializer < ActiveModel::Serializer
  attributes :id, :description, :town, :name, :lat, :long, :access_type

  has_many :water_access_images
  has_many :water_access_ratings
end
