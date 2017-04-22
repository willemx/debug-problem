/**
 * Created by willem on 12/04/2017.
 */

import React from 'react'

const Plotly = require('plotly.js/lib/core');

Plotly.register([
  require('plotly.js/lib/bar'),
  require('plotly.js/lib/pie'),
]);


export class Graph extends React.Component {

  constructor (props) {
    console.log('Graph constructor')
    super(props)
  }


  componentDidMount () {

    console.log('Graph componentDidMount')

    const data = [{
      values: [19, 26, 55],
      labels: ['Residential', 'Non-Residential', 'Utility'],
      type: 'pie'
    }]

    const layout = {
      height: 400,
      width: 500
    }

    Plotly.newPlot('plotly', data, layout)
  }


  render () {
    console.log(`render Graph`)
    return <div
      id="plotly"
      style={{
        width: 600,
        height: 500
      }}
    >
    </div>
  }

}
