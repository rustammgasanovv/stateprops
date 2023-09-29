import React, { Component } from 'react'
import Card from './Card'

export class Container extends Component {
  render() {
    return (
      <div className='container'>
        <Card title="BMW" name="e60" />
        <Card title="nissan" name="juke" />
        <Card title="mercedes" name="CLS 6.3 AMG Sport" />
        <Card title="chevrolet" name="tefal" />
      </div>
    )
  }
}

export default Container