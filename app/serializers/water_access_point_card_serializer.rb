class WaterAccessPointCardSerializer < ActiveModel::Serializer
  attributes :id, :description, :town, :trail_map, :name, :lat, :long
end
