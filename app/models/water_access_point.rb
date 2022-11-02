class WaterAccessPoint < ApplicationRecord
    has_many :water_access_comments, dependent: :destroy
    has_many :water_access_ratings, dependent: :destroy
    has_many :water_access_collaborators, dependent: :destroy
    has_many :users, through: :water_access_collaborators
    has_many :images, dependent: :destroy

    validates :name, presence: true, uniqueness: true, length: {minimum: 6, maximum: 180}
    validates :lat, presence: true
    validates :long, presence: true
    validates :type, presence: true
    validates :description, presence: true, length: {minimum: 50, maximum: 240}
    validates :town, presence: true
    validates :handicap_accessible, presence: true
    validates :traffic, presence: true
    validates :details, presence: true
    #trail_map not included yet
end
