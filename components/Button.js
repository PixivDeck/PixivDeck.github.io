// @flow
import React, { Component } from 'react'

export default class Button extends Component {
  props: { children?: React.Element<*> }
  render() {
    return (
      <button>
        {this.props.children}
        <style jsx>{`
          button {
            color: white;
            background: #4493ef;
            border-radius: 8px;
            padding: 17px 10px;
            cursor: pointer;
            font-size: 16px;
            outline: none;
          }
          button :hover {
            background: #57a5ff;
          }
        `}</style>
      </button>
    )
  }
}
