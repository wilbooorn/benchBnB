# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

b1 = Bench.create(description:"Terrible Bench", lat: 37.769051, lng: -122.421829)
b2 = Bench.create(description:"Best bench ever", lat: 37.760099, lng: 122.426244)
b3 = Bench.create(description:"Very meh", lat: 37.778041, lng: 122.390207)
b4 = Bench.create(description:"Love this bench!", lat: 37.775803, lng: 122.433202)
