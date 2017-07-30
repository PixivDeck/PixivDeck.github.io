// @flow
import React, { Component } from 'react'
import * as platfrom from 'platform'
import Button from './Button'
import Center from './Center'

const version = '0.15.0'

const macOS = `PixivDeck-${version}.dmg`
const windonws = `PixivDeck-Setup-${version}.exe`
const linux = `PixivDeck-${version}-x86_64.AppImage`

const downloadLink = `https://github.com/akameco/PixivDeck/releases/download/v${version}`

function getDownloadLink(family: string): string {
  if (family === 'OS X') {
    return `${downloadLink}/${macOS}`
  } else if (family === 'Windows' || family === 'Windows XP') {
    return `${downloadLink}/${windonws}`
  }
  return `${downloadLink}/${linux}`
}

function getOSText(family: string): string {
  if (family === 'OS X') {
    return 'Mac版'
  } else if (family === 'Windows' || family === 'Windows XP') {
    return 'Windows版'
  }
  return 'Linux版'
}

type State = {
  link: string,
  text: string,
}

export default class Download extends Component {
  state: State
  componentWillMount() {
    const { os: { family } } = platfrom
    this.setState({
      link: getDownloadLink(family),
      text: getOSText(family),
    })
  }
  render() {
    return (
      <div className="top">
        <Center>
          <a href={this.state.link}>
            <Button>PixivDeck を無料ダウンロード</Button>
          </a>
        </Center>
        <p className="version">
          {this.state.text}
        </p>
        <a
          href="https://github.com/akameco/PixivDeck/releases/latest"
          className="other"
        >
          別のプラットフォーム向けのPixivDeckをダウンロード
        </a>
        <style jsx>{`
          .top {
            margin-top: 30px;
            display: flex;
            justify-content: center;
            flex-direction: column;
          }

          .other {
            margin-top: 10px;
            color: #605454;
            text-decoration: none;
            cursor: pointer;
          }

          .other:hover {
            color: #4493ef;
          }

          .version {
            font-size: 14px;
            color: #938181;
            margin-top: 5px;
            text-align: center;
          }
        `}</style>
      </div>
    )
  }
}
