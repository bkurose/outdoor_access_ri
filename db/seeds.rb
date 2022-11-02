puts "erasing old seed data"

User.destroy_all
WaterAccessPoint.destroy_all
WaterAccessComment.destroy_all
WaterAccessRating.destroy_all
WaterAccessImage.destroy_all
WaterAccessCollaborator.destroy_all

puts "seeding new data"

#users
user1 = User.create(username: "benkurose1", email: "ben.kurose@gmail.com", password: "101010bk", first_name: "Ben", last_name: "Kurose")
user2 = User.create(username: "oceanGuy12", email: "oceanGuy12@hotmail.com", password: "12341234", first_name: "Rob", last_name: "Stewart")
user3 = User.create(username: "surfingFreak2", email: "surfingFreak2@aol.com", password: "454545kl", first_name: "Rachel", last_name: "Steinburg")
user4 = User.create(username: "NKBfriend11", email: "NKBfriend11@yahoo.com", password: "123123cs", first_name: "Sam", last_name: "BW")

#water_access_points
water_access_point1 = WaterAccessPoint.create(name: "Bluff Avenue, Access Point for East Beach" town: "Westerly", handicap_accessible: false, traffic: "medium", description: "An off-the-beaten-path access point for East Beach, leads to the far western side. CRMC ROW A-2", dogs: false, type: "ROW", lat: 41.308712, long: -71.855647 parking: "Limited")
water_access_point2 = WaterAccessPoint.create(name: "Charlestown Breach Parking Lot, Access Point for Charlestown Beach" town: "Charlestown", handicap_accessible: true, traffic: "heavy", description: "A parking lot a the far end of Charlestown Beach Road, great for accessing the west end of Charlestown Beach. CRMC ROW B-1", dogs: false, type: "ROW", lat: 41.357171, long: -71.637151, parking: "Lot with 20-30 spots, somtimes limited by nearby homeowners")
water_access_point3 = WaterAccessPoint.create(name: "Statice Drive, Access Point for Charlestown Beach" town: "South Kingstown", handicap_accessible: false, traffic: "light", description: "An off-the-beaten-path access point for Charlestown Beach, leads to the far eastern side. CRMC ROW D-1", dogs: false, type: "ROW", lat: 41.363507, long: -71.615373, parking: "Extremely limited")

#water_acccess_collaborators
water_access_collab1 = WaterAccessCollaborator.create(user: user1, water_access_point: water_access_point1, full_edit: true)
water_access_collab2 = WaterAccessCollaborator.create(user: user1, water_access_point: water_access_point2, full_edit: true)
water_access_collab3 = WaterAccessCollaborator.create(user: user1, water_access_point: water_access_point3, full_edit: true)
water_access_collab4 = WaterAccessCollaborator.create(user: user1, water_access_point: water_access_point4, full_edit: true)
water_access_collab5 = WaterAccessCollaborator.create(user: user2, water_access_point: water_access_point1, full_edit: false)

#water_access_comments
water_access_comment1 = WaterAccessComment.create(user: user1, water_access_point: water_access_point1, comment: "Truly a hidden gem here in the Ocean State, one of my favorite spots. Look for autumn olives along the shore here!")
water_access_comment2 = WaterAccessComment.create(user: user2, water_access_point: water_access_point1, comment: "Wish so many people didn't come here, there's almost no parking available. Got shut out twice this summer already")
water_access_comment3 = WaterAccessComment.create(user: user1, water_access_point: water_access_point2, comment: "Be wary: local homeowners are a little protective of their so-called private beaches, but don't let that dissuade you! Your tax dollars have rebuilt the beach many times, and your right to be there is consitutionally protected.")
water_access_comment4 = WaterAccessComment.create(user: user3, water_access_point: water_access_point2, comment: "Dumped boulders in the parking lot to prevent access :( Shouldn't be legal to block access on a whim to such a valuable state resource.")
water_access_comment5 = WaterAccessComment.create(user: user2, water_access_point: water_access_point3, comment: "Great spot to see Piping Plovers race around in the sand.")
water_access_comment6 = WaterAccessComment.create(user: user4, water_access_point: water_access_point3, comment: "A wonderful spot, if you can get there first. Don't park along the road, you will get fined.")
water_access_comment7 = WaterAccessComment.create(user: user1, water_access_point: water_access_point3, comment: "Great fishing just east of this spot, careful the bottom is rocky and snags easily. Tautog and flounder plentiful here.")

#water_access_ratings
water_access_rating1 = WaterAccessRating.create(user: user1, water_access_point: water_access_point2, rating: 5)
water_access_rating2 = WaterAccessRating.create(user: user1, water_access_point: water_access_point3, rating: 4)
water_access_rating3 = WaterAccessRating.create(user: user2, water_access_point: water_access_point1, rating: 3)
water_access_rating4 = WaterAccessRating.create(user: user2, water_access_point: water_access_point2, rating: 4)
water_access_rating5 = WaterAccessRating.create(user: user2, water_access_point: water_access_point3, rating: 2)
water_access_rating6 = WaterAccessRating.create(user: user3, water_access_point: water_access_point1, rating: 4)
water_access_rating7 = WaterAccessRating.create(user: user3, water_access_point: water_access_point2, rating: 4)
water_access_rating8 = WaterAccessRating.create(user: user3, water_access_point: water_access_point3, rating: 5)
water_access_rating9 = WaterAccessRating.create(user: user4, water_access_point: water_access_point1, rating: 5)
water_access_rating10 = WaterAccessRating.create(user: user4, water_access_point: water_access_point2, rating: 4)

puts "finished seeding data!"