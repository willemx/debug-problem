import React from 'react'


export class AppScreen extends React.Component {

  constructor (props) {
    super(props);

    this.updateDimensions = this._updateDimensions.bind(this);
  }


  render () {
    console.log(`width: ${this.state.appWidth} height: ${this.state.appHeight}`);
    return (
      <div className="AppScreen">
        {this.props.children}
      </div>
    );
  }


  _updateDimensions () {
    const w = window,
      d = document,
      documentElement = d.documentElement,
      body = d.getElementsByTagName('body')[0],
      width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
      height = w.innerHeight || documentElement.clientHeight || body.clientHeight;
    this.setState({appWidth: width, appHeight: height});
  }

  componentWillMount () {
    this.updateDimensions();
  }

  componentDidMount () {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.updateDimensions);
  }

}

