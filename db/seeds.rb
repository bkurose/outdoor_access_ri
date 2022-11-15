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
water_access_point1 = WaterAccessPoint.create(name: "Bluff Avenue, Access Point for East Beach", town: "Westerly", handicap_accessible: false, traffic: "medium", description: "An off-the-beaten-path access point for East Beach, leads to the far western side. CRMC ROW A-2", dogs: false, access_type: "ROW", lat: 41.308712, long: -71.855647, parking: "Limited", details: "A CRMC Row with pretty limited parking. Access to one of the best beaches in the whole state, one of the few that opens up to the atlantic rather than just a bay. Be careful; the surf at this beach can be very intense since it again is not protected like the bay. One of the 234 Official CRMC Rows available throughout the state. I would recommend Looking up all the possible access points on their website until they have all been uploaded here on Outdoor Access RI.", fee: false, bathrooms: false)
water_access_point2 = WaterAccessPoint.create(name: "Charlestown Breach Parking Lot, Access Point for Charlestown Beach", town: "Charlestown", handicap_accessible: true, traffic: "heavy", description: "A parking lot a the far end of Charlestown Beach Road, great for accessing the west end of Charlestown Beach. CRMC ROW B-1", dogs: false, access_type: "ROW", lat: 41.357171, long: -71.637151, parking: "Lot with 20-30 spots, somtimes limited by nearby homeowners", details: "A super neat little parking lot all the way down the the end of the road. Far away from light pollution, this beach is one of the best spots to stargaze in the state. One needs to go 100 miles further to be more remote. Not technically one of the 234 Official CRMC Rows available throughout the state, but still a fully public and free access site. I would recommend Looking up all the possible access points on their website until they have all been uploaded here on Outdoor Access RI.", fee: false, bathrooms: false)
water_access_point3 = WaterAccessPoint.create(name: "Statice Drive, Access Point for Charlestown Beach", town: "South Kingstown", handicap_accessible: false, traffic: "light", description: "An off-the-beaten-path access point for Charlestown Beach, leads to the far eastern side. CRMC ROW D-1", dogs: false, access_type: "ROW", lat: 41.363507, long: -71.615373, parking: "Extremely limited", details: "A CRMC Row with pretty limited parking One of the 234 Official CRMC Rows available throughout the state. I would recommend Looking up all the possible access points on their website until they have all been uploaded here on Outdoor Access RI. Parking here is extremely limited so it is recommended arriving early or during off-peak hours.", fee: false, bathrooms: false)
water_access_point4 = WaterAccessPoint.create(name: "Narrow River Access, Rt 1A", town: "Narragansett", handicap_accessible: false, traffic: "heavy", description: "A hand-carry only boat access for the Narrow River.", dogs: true, access_type: "DEM Boat Launch", lat: 41.449794, long: -71.449055, parking: "Good size lot with another lot accross the street. Still fills up quickly on prime sumemr days.", details: "Access to the Narrow River for hand-carry boats only. Roack block the entrance to the water so it's important to note that trailers will not be getting very close. To the right of the access point there is a ton of salt marsh: some of the healthiest in the state. Enjoy the Spartina grass, and if you're here in early May look out for the herring run, where all sorts of birds and fish will gather for this annual event. To the left of the access is Narragansett beach, on the far northern end past the Dunes Club. Be careful bringing dogs here as they can disturbe nseting birds.", fee: false, bathrooms: true)
water_access_point5 = WaterAccessPoint.create(name: "Gull Cove, Tiverton Town Access", town: "Portsmouth", handicap_accessible: true, traffic: "light", description: "A town run small access for the Gull Cove area.", dogs: true, access_type: "Town Public Access", lat: 41.634812, long: -71.234310, parking: "Huge amount of parking, never close to full here.", details: "Access to Gull Cove, a little-known water access spot run by the town. One of the few spots were you are able to drive your car almost right up to the water. Be careful when coming here; if you are past the breachway after high tide you will need to wait to leave. Water here is clean, but currents are extreme so swimming is not recommended. Very casual, easy, and free spot to hit the water.", fee: false, bathrooms: true)
water_access_point6 = WaterAccessPoint.create(name: "Wood River Canoe Launch", town: "Exeter", handicap_accessible: true, traffic: "medium", description: "A WPWA canoe-kayak launch site with easy river access.", dogs: true, access_type: "Town Public Access", lat: 41.573042, long: -71.721596, parking: "Good amount of parking, only full on the absolute busiest days during peak hours. Trailer parking available.", details: "The Wood River is the longest continuously wooded stretch of river between New York and Boston. This gem has been protected by it's relatively remote location and through the efforts of the fine people at the WPWA. A great river to boat, fish, and enjoy during the summer months. Trout stocked in April every year by the DEM. Look for otter, beaver, and turtles as you traverse the river.", fee: false, bathrooms: true)
water_access_point7 = WaterAccessPoint.create(name: "Cronan Fishing Access: Pawcatuck River", town: "Richmond", handicap_accessible: true, traffic: "light", description: "A DEM Fishing Access Site with easy river access for boats.", dogs: true, access_type: "DEM Fishing Access", lat: 41.445154, long: -71.681455, parking: "6-8 spots available depending on how people park/trailers. ", details: "Access point for the Pawcatuck River. One of the best sites to launch if you want to do an overnight camping trip on the river here in Rhode Island. About 8 miles downriver is the DEM canoe-access-only campsites, a well kept secret tucked into the woods. One of the most consistent places to see beaver: larger dams cover the riverbanks. Fishing here is particularly good: with access to the ocean it gets american eels and other species not seen in other river. Stocked with trout in April annually.", fee: false, bathrooms: true)
water_access_point8 = WaterAccessPoint.create(name: "Pebble Beach", town: "Middletown", handicap_accessible: true, traffic: "light", description: "A town beach, as name would suggest is covered in small rocks. Great fishing location.", dogs: true, access_type: "Town Public Beach", lat: 41.514359, long: -71.234033, parking: "Extremely limited: 3 spots", details: "If you can get here early enough or are lucky enough to get a spot this is one of the best beaches for a little privacy in the whole state. The very limited parking is frustrating but keeps the traffic in this location very small. A great spot of a picnic or other activity, be careful swimming here as currents are strong and there are NO LIFEGUARDS. On sunny, clear days tautog and bass can be swimming around the rock on the points. Locals are very territorial of this spot; dont be surprised if some shade is thrown at you.", fee: false, bathrooms: true)
water_access_point9 = WaterAccessPoint.create(name: "Rome Point: Home of the Seals!", town: "Saunderstown", handicap_accessible: false, traffic: "heavy", description: "A WPWA canoe-kayak launch site with easy river access.", dogs: true, access_type: "State Park", lat: 41.536970, long: -71.437130, parking: "Good amount of parking, only full on the absolute busiest days during peak hours. Trailer parking available.", details: "This spot is well known by Rhode Islanders throughout the state as the home of the seals! After a short hike of a little less than a mile to the coast, head left down the beach to the point. Be careful with you dogs here; loud dogs can distrube the seals on their rocks. You may need binoculars to see the seals, but in the prime season dozens can be seen here every low tide. South of the Cape this is definitely the best place to see the seals. Be careful; they are protected and approaching them is illegal. Divers who have tried have also been rewarded with seal headbutts to the chest, so watch out!", fee: false, bathrooms: true)

#water_acccess_collaborators
water_access_collab1 = WaterAccessCollaborator.create(user: user1, water_access_point: water_access_point1, full_edit: true)
water_access_collab2 = WaterAccessCollaborator.create(user: user1, water_access_point: water_access_point2, full_edit: true)
water_access_collab3 = WaterAccessCollaborator.create(user: user1, water_access_point: water_access_point3, full_edit: true)
water_access_collab4 = WaterAccessCollaborator.create(user: user3, water_access_point: water_access_point2, full_edit: true)
water_access_collab5 = WaterAccessCollaborator.create(user: user2, water_access_point: water_access_point1, full_edit: false)
water_access_collab6 = WaterAccessCollaborator.create(user: user1, water_access_point: water_access_point4, full_edit: true)
water_access_collab7 = WaterAccessCollaborator.create(user: user1, water_access_point: water_access_point5, full_edit: true)
water_access_collab8 = WaterAccessCollaborator.create(user: user1, water_access_point: water_access_point6, full_edit: true)
water_access_collab9 = WaterAccessCollaborator.create(user: user1, water_access_point: water_access_point7, full_edit: true)
water_access_collab10 = WaterAccessCollaborator.create(user: user1, water_access_point: water_access_point8, full_edit: true)
water_access_collab11 = WaterAccessCollaborator.create(user: user1, water_access_point: water_access_point9, full_edit: true)


#water_access_comments
water_access_comment1 = WaterAccessComment.create(user: user1, water_access_point: water_access_point1, comment_title: "Hidden Gem", comment: "Truly a hidden gem here in the Ocean State, one of my favorite spots. Look for autumn olives along the shore here!. Be sure not to walk in the dunes, cool as they are. There be fragile species nesting there, and your presence alone is a huge problem.")
water_access_comment2 = WaterAccessComment.create(user: user2, water_access_point: water_access_point1, comment_title: "No Parking", comment: "Wish so many people didn't come here, there's almost no parking available. Got shut out twice this summer already. Out-of-state folks coming in and clogging up our good resources with their oversized cars!")
water_access_comment3 = WaterAccessComment.create(user: user1, water_access_point: water_access_point2, comment_title: "Angry Homeowners", comment: "Be wary: local homeowners are a little protective of their so-called private beaches, but don't let that dissuade you! Your tax dollars have rebuilt the beach many times, and your right to be there is consitutionally protected. If you are confronted, however, be sure not to escalate and call the local police if you feel you were within your rights.")
water_access_comment4 = WaterAccessComment.create(user: user3, water_access_point: water_access_point2, comment_title: "Boulders", comment: "Dumped boulders in the parking lot to prevent access :( Shouldn't be legal to block access on a whim to such a valuable state resource. If you see stuff like this be sure to report it to the CRMC or another official.")
water_access_comment5 = WaterAccessComment.create(user: user2, water_access_point: water_access_point3, comment_title: "Plovers!", comment: "Great spot to see Piping Plovers race around in the sand. Be carefult when bringing your dogs here, they can make a huge mess of the birds eggs in the fragmities.")
water_access_comment6 = WaterAccessComment.create(user: user4, water_access_point: water_access_point3, comment_title: "Great Spot", comment: "A wonderful spot, if you can get there first. Don't park along the road, you will get fined. My girlfriend and I got a ticket after only 15 minutes in that spot, we weren't even staying just a quick stop. So frustrating.")
water_access_comment7 = WaterAccessComment.create(user: user1, water_access_point: water_access_point3, comment_title: "Fishing Great Here", comment: "Great fishing just east of this spot, careful the bottom is rocky and snags easily. Tautog and flounder plentiful here. Lots of tautog, flounder, and even makos in the right season. This is also one of the only spots you'll see loggerhead turtle coming ashore!")
water_access_comment8 = WaterAccessComment.create(user: user1, water_access_point: water_access_point4, comment_title: "Great spot for Herring Run", comment: "In the right season this place is prime to watch the herring run. Even with the naked eye in the turbulent water it's easy to see the herring en masse as they move upriver.")
water_access_comment9 = WaterAccessComment.create(user: user1, water_access_point: water_access_point5, comment_title: "Strong Current", comment: "NOT RECOMMENDED FOR SWIMMING. Please be careful here, the current is easily 10 knots in the narrow part of the channel so be careful, even the best swimmers couldn't fight that current!")
water_access_comment10 = WaterAccessComment.create(user: user1, water_access_point: water_access_point6, comment_title: "Boy Scout Troops", comment: "Usually such a quiet place, except when the boy scouts do their trips downriver. While they certainly have a right to be here and enjoy the outdoors, those visiting should know the river will be chok-full of canoes as they slowly work their way downriver. Avoid by going during the week, weekends in June tend to be busy with large groups here.")
water_access_comment11 = WaterAccessComment.create(user: user1, water_access_point: water_access_point7, comment_title: "Trout right under the bridge", comment: "Great fishing just underneath the bridge here as lazy trout wait in the eddies for tasty things to float overhead. Real fat trout have been pulled from this spot. Locals are a little protective of this spot, and may ask where you are from. Tell them none-of-your-business.")
water_access_comment12 = WaterAccessComment.create(user: user1, water_access_point: water_access_point8, comment_title: "Never any parking", comment: "This place must be one of the most frustrating to try to access regularly. After a drive accross the state it can be a little defeating to find the lot full up every time. Would recommend going to Gull Cove if you get shut out of here. Sandy Point Beach is nearby but the access fee for non-residents is steep.")
water_access_comment13 = WaterAccessComment.create(user: user1, water_access_point: water_access_point9, comment_title: "Please Don't Bring Your Noisy Dog!", comment: "This place has been a wonderful spot to enjoy the seals, unfortunately some people have been ruining it by bringing their barky dog down to the point. Especially in the off-season, the few seals that are there will certainly dive if they sense a dogs nearby. That means the trip is over for the seal watchers: the seals won't return until next low tide. ")

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
water_access_rating11 = WaterAccessRating.create(user: user1, water_access_point: water_access_point4, rating: 4)
water_access_rating12 = WaterAccessRating.create(user: user1, water_access_point: water_access_point5, rating: 4)
water_access_rating13 = WaterAccessRating.create(user: user1, water_access_point: water_access_point6, rating: 4)
water_access_rating14 = WaterAccessRating.create(user: user1, water_access_point: water_access_point7, rating: 5)
water_access_rating15 = WaterAccessRating.create(user: user1, water_access_point: water_access_point8, rating: 5)
water_access_rating16 = WaterAccessRating.create(user: user1, water_access_point: water_access_point9, rating: 4)


puts "finished seeding data!"