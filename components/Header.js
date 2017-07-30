// @flow
import React, { Component } from 'react'
import Logo from './Logo'
import Center from './Center'

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          <Center direction="row">
            <Logo />
            <h1>PixivDeck</h1>
          </Center>
        </div>
        <style jsx>{`
          header {
            width: 100%;
            background: black;
          }
          .logo {
            padding: 0 20px;
            text-align: left;
            display: flex;
            flex-direction: row;
            cursor: pointer;
          }
          h1 {
            font-size: 20px;
            font-weight: 300;
            color: white;
          }
        `}</style>
      </header>
    )
  }
}
