class CreateWaterAccessPoints < ActiveRecord::Migration[7.0]
  def change
    create_table :water_access_points do |t|
      t.string :name
      t.float :lat
      t.float :long
      t.string :access_type
      t.string :description
      t.boolean :dogs
      t.string :town
      t.string :trail_map
      t.string :handicap_accessible
      t.string :details
      t.string :traffic
      t.string :parking
      t.boolean :bathrooms
      t.boolean :fee

      t.timestamps
    end
  end
end
