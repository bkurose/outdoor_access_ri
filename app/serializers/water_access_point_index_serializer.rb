class WaterAccessPointIndexSerializer < ActiveModel::Serializer
  attributes :id, :description, :town, :name, :lat, :long

  has_many :water_access_images
end
