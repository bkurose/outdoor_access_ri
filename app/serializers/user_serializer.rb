class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :password_digest, :username, :email, :profile_pic

  has_many :water_access_comments
  has_many :water_access_points
  has_many :water_access_images
  has_many :water_access_collaborators
end
