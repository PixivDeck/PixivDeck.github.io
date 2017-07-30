// @flow
import React, { Component } from 'react'
import { STATIC_PATH } from '../utils/getPath'

export default class Logo extends Component {
  render() {
    return (
      <div>
        <img src={`${STATIC_PATH}/logo.png`} />
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
