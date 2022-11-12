# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_11_02_170611) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "password_digest"
    t.string "username"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "water_access_collaborators", force: :cascade do |t|
    t.integer "user_id"
    t.integer "water_access_point_id"
    t.boolean "full_edit"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "water_access_comments", force: :cascade do |t|
    t.integer "user_id"
    t.integer "water_access_point_id"
    t.string "comment_title"
    t.string "comment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "water_access_images", force: :cascade do |t|
    t.integer "user_id"
    t.integer "water_access_point_id"
    t.string "file_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "water_access_points", force: :cascade do |t|
    t.string "name"
    t.float "lat"
    t.float "long"
    t.string "access_type"
    t.string "description"
    t.boolean "dogs"
    t.string "town"
    t.string "trail_map"
    t.string "handicap_accessible"
    t.string "details"
    t.string "traffic"
    t.string "parking"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "water_access_ratings", force: :cascade do |t|
    t.integer "user_id"
    t.integer "water_access_point_id"
    t.integer "rating"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
