// @flow
import React, { Component } from 'react'
import Center from './Center'
import Logo from './Logo'

export default class Title extends Component {
  render() {
    return (
      <div className="title">
        <Center direction="row">
          <Logo />
          <h1>PixivDeck</h1>
        </Center>
        <h2>マルチカラム多機能pixivクライアント</h2>
        <style jsx>{`
          .title {
            width: 100%;
            margin: 15px 5px 30px;
          }

          h1 {
            font-size: 3.2em;
            margin-left: 5px;
          }

          h2 {
            text-align: center;
            margin: 0 auto;
            font-size: 1.25em;
            font-weight: 300;
            color: #5a5252;
          }
        `}</style>
      </div>
    )
  }
}
