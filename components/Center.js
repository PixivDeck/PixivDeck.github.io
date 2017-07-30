// @flow
import React, { Component } from 'react'

type Direction = 'column' | 'row'

type DP = {
  direction: Direction,
}

type Props = {
  children?: React.Element<*>,
} & DP

export default class Center extends Component<DP, Props, void> {
  static defaultProps = { direction: 'column' }
  render() {
    const { children, direction } = this.props
    const cn = direction === 'column' ? 'center' : 'center row'

    return (
      <div className={cn}>
        {children}
        <style jsx>{`
          .center {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
          .row {
            flex-direction: row;
          }
        `}</style>
      </div>
    )
  }
}
