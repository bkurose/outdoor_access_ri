class WaterAccessPoint < ApplicationRecord
    has_many :water_access_comments, dependent: :destroy
    has_many :water_access_ratings, dependent: :destroy
    has_many :water_access_collaborators, dependent: :destroy
    has_many :users, through: :water_access_collaborators
    has_many :water_access_images, dependent: :destroy

    validates :name, presence: true, uniqueness: true, length: {minimum: 1, maximum: 240}
    validates :lat, presence: true
    validates :long, presence: true
    validates :access_type, presence: true, length: {minimum: 1, maximum: 128}
    validates :description, presence: true, length: {minimum: 1, maximum: 240}
    validates :town, presence: true
    validates :handicap_accessible, presence: true
    validates :traffic, presence: true
    validates :details, presence: true, length: {minimum: 1, maximum: 1000}
    validates :parking, presence: true, length: {minimum: 1, maximum: 1000}
    #trail_map not included yet
end
