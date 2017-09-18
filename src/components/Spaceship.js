import React from 'react';

class SpaceShip extends React.Component {
  render() {
    return(
        <div className="spaceship">
          <div>{this.props.name}</div>
          <div>{this.props.speed}</div>
          <div>{this.props.hasRockets}</div>
          <div>{this.props.colors}</div>
        </div>
    )
  }
}

SpaceShip.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ['black', 'red']
}

export default SpaceShip;
