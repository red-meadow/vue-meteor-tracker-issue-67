import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import { Items } from '/imports/items'


Items.remove({})

for (let i = 1; i <= 1000; i++) {
  Items.insert({
    number: i
  })
}

Meteor.publish('items', function (query, options) {
  console.log(query, options)
  return Items.find(query, options)
})