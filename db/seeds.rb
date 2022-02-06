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

Gear.create(part_list: "Nut,tuning keys,head,neck,frets,fingerboard,position markers,body,pick guard,soundhole,pickups,pickup selector switch,volume/tone controls,saddle,bridge,output jack", category: "Guitar")
Gear.create(part_list: "the address of your mother", category: "Car that goes to your mom's house")
Gear.create(part_list: "Binding, Board", category: "Snowboard")
