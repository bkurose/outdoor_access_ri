class CreateWaterAccessComments < ActiveRecord::Migration[7.0]
  def change
    create_table :water_access_comments do |t|
      t.integer :user_id
      t.integer :water_access_point_id
      t.string :comment

      t.timestamps
    end
  end
end
