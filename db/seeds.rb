# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Category.create(name: 'Skis')
Category.create(name: 'Guitar')

f = Category.first
f.parts.create(name: "Alpine Binding", part_type: "ski binding", size_id: rand(1..3))
f.parts.create(name: "Backcountry Binding", part_type: "ski binding", size_id: rand(1..3))

f = Category.last
f.parts.create(name: "epic super truck super nuts in your mouth", part_type: "nut", size_id: rand(1..3))
f.parts.create(name: "Fender extreme 3000", part_type: "nut", size_id: rand(1..3))
