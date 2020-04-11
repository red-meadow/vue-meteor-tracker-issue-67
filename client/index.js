import { Meteor } from 'meteor/meteor'
import Vue from 'vue'
import VueMeteorTracker from 'vue-meteor-tracker'
import TheApp from '/imports/TheApp.vue'


Vue.use(VueMeteorTracker)

Meteor.startup(() => {
  new Vue({
    render: h => h(TheApp)
  }).$mount('#app')
})
