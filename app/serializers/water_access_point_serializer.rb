class WaterAccessPointSerializer < ActiveModel::Serializer
  attributes :id, :name, :lat, :long, :type, :description, :dogs, :town, :trail_map, :handicap_accessible, :details, :traffic
end
