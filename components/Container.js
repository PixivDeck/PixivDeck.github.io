// @flow
import React, { Component } from 'react'
import Center from './Center'

export default class Container extends Component {
  props: { children?: React.Element<*> }
  render() {
    return (
      <div className="container">
        <Center>
          {this.props.children}
        </Center>
        <style jsx>{`
          .container {
            margin: 0 auto;
            max-width: 960px;
            padding: 0 10px;
          }
        `}</style>
      </div>
    )
  }
}
