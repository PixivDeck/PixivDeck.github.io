// @flow
import React, { Component } from 'react'

export default class Logo extends Component {
  render() {
    return (
      <div>
        <img src="static/logo.png" />
        <style jsx>{`
          img {
            width: 44px;
            height: 44px;
          }
        `}</style>
      </div>
    )
  }
}
