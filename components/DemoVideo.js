// @flow
import React, { Component } from 'react'
import EventListener from 'react-event-listener'
import Youtube from 'react-youtube'

type State = {
  width: number,
}

const defaultWidth = 730

type Props = {
  videoId: string,
  opts?: Object,
}

export default class DemoVideo extends Component {
  props: Props
  state: State = {
    width: defaultWidth,
  }

  handleOnReady = (event: any) => {
    event.target.setVolume(0)
  }

  componentDidMount() {
    this.handleResize()
  }

  handleResize = () => {
    const windowWidth = window.innerWidth
    if (windowWidth < defaultWidth && windowWidth > 200) {
      this.setState({ width: windowWidth - 10 })
    } else {
      this.setState({ width: defaultWidth })
    }
  }

  render() {
    const { width } = this.state
    const { videoId, opts = {} } = this.props

    const youtubeOpts = {
      width,
      playerVars: {
        rel: 0,
        controls: 2,
        ...opts,
      },
    }

    return (
      <div>
        <EventListener target="window" onResize={this.handleResize} />
        <Youtube
          videoId={videoId}
          opts={youtubeOpts}
          onReady={this.handleOnReady}
        />
      </div>
    )
  }
}
