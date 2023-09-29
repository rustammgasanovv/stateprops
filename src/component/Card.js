import React, { Component } from 'react'

export class Card extends Component {
  render() {
    return (
      <div className='card'>
        <h2>{this.props.title}</h2>
        <p>{this.props.name}</p>
      </div>
    )
  }
}

export default Card