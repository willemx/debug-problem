import { Meteor } from 'meteor/meteor'
import React from 'react'
import ReactDOM from 'react-dom'

import {AppScreen} from '../imports/client/AppScreen'


Meteor.startup(function () {

  console.log('startup');
  ReactDOM.render(
    <AppScreen>
      hello
    </AppScreen>, document.getElementById('App'));
});



