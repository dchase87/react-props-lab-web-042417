import React from 'react'
import ReactDOM from 'react-dom'

export default class Spaceship extends React.Component {
  render () {
    return (
      <div className="ship-data">
        <h1>{this.props.name}</h1>
        <h3>{this.props.speed}</h3>
        <h3>{this.props.hasRockets}</h3>
        <h3>{this.props.colors.join(', ')}</h3>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}

ReactDOM.render(
  <Spaceship
    name="Jimmy"
  />,
  document.getElementById('root')
)
