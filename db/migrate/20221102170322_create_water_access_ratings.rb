class CreateWaterAccessRatings < ActiveRecord::Migration[7.0]
  def change
    create_table :water_access_ratings do |t|
      t.integer :user_id
      t.integer :water_access_point_id
      t.integer :rating

      t.timestamps
    end
  end
end
