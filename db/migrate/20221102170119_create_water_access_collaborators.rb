class CreateWaterAccessCollaborators < ActiveRecord::Migration[7.0]
  def change
    create_table :water_access_collaborators do |t|
      t.integer :user_id
      t.integer :water_access_point_id
      t.boolean :full_edit

      t.timestamps
    end
  end
end
