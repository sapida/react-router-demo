import React, { Component } from 'react'

export default class about extends Component {
  componentDidMount(){
    console.log(this.props.match.params.id);
  }
  render() {
    return (
      <div>
        About
      </div>
    )
  }
}
