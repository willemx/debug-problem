import { Meteor } from 'meteor/meteor'
import React from 'react'
import ReactDOM from 'react-dom'

import { AppScreen } from '../imports/client/AppScreen'
import { Graph } from '../imports/client/graph'


Meteor.startup(function () {

  console.log('startup')
  ReactDOM.render(
    <AppScreen>
      <Graph />
    </AppScreen>, document.getElementById('App'))
})



