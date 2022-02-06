# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



Part.create(name: "Alpine Binding")
Part.create(name: "Backcountry Binding")
Part.create(name: "Red", category: "Skateboard")
Part.create(name: "FUcking lit company truck non nuts", part_type: "truck")
Part.create(name: "Fender extreme 3000", part_type: "nut")

Gear.create(part_list: "nut", category: "Guitar")
Gear.create(part_list: "tuning keys", category: "Guitar")
Gear.create(part_list: "head", category: "Guitar")
Gear.create(part_list: "neck", category: "Guitar")
Gear.create(part_list: "frets", category: "Guitar")
Gear.create(part_list: "fingerboard", category: "Guitar")
Gear.create(part_list: "postion markers", category: "Guitar")
Gear.create(part_list: "body", category: "Guitar")
Gear.create(part_list: "pick guard", category: "Guitar")
Gear.create(part_list: "soundhole", category: "Guitar")
Gear.create(part_list: "pickups", category: "Guitar")
Gear.create(part_list: "pickups selector switch", category: "Guitar")
Gear.create(part_list: "volume/tone controls", category: "Guitar")
Gear.create(part_list: "saddle", category: "Guitar")
Gear.create(part_list: "bridge", category: "Guitar")
Gear.create(part_list: "output jack", category: "Guitar")

Gear.create(part_list: "the address of your mother", category: "Car that goes to your mom's house")
Gear.create(part_list: "Binding", category: "Snowboard")
Gear.create(part_list: "Board", category: "Snowboard")
