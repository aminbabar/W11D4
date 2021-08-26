# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


ActiveRecord::Base.transaction do
  Todo.destroy_all
#   puts "Creating teas..."
  one = Todo.create!(title: "1", body: "1", done: false)
  two = Todo.create!(title: "2", body: "2", done: false)
  third = Todo.create!(title: "3", body: "3", done: true)
  four = Todo.create!(title: "4", body: "4 qo2ewnbf3rof", done: true)
  five = Todo.create!(title: "5", body: "5", done: false)
  six = Todo.create!(title: "6", body: "6", done: false)

end
