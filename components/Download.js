// @flow
import React, { Component } from 'react'
import * as platfrom from 'platform'
import Button from './Button'
import Center from './Center'

async function getPkgVersion() {
  const pkgUrl =
    'https://raw.githubusercontent.com/akameco/PixivDeck/master/app/package.json'
  const res = await fetch(pkgUrl)
  const { version = '0.15.0' } = await res.json()
  return version
}

function getDownloadLink(version: string, family: string): string {
  const downloadLink = `https://github.com/akameco/PixivDeck/releases/download/v${version}`
  const macOS = `PixivDeck-${version}.dmg`
  const windonws = `PixivDeck-Setup-${version}.exe`
  const linux = `PixivDeck-${version}-x86_64.AppImage`

  if (family === 'OS X') {
    return `${downloadLink}/${macOS}`
  } else if (family === 'Windows' || family === 'Windows XP') {
    return `${downloadLink}/${windonws}`
  } else if (family === 'Android' || family === 'iOS') {
    return ''
  }
  return `${downloadLink}/${linux}`
}

function getOSText(family: string): string {
  if (family === 'OS X') {
    return 'Mac版'
  } else if (family === 'Windows' || family === 'Windows XP') {
    return 'Windows版'
  } else if (family === 'Android' || family === 'iOS') {
    return 'デスクトップ向けアプリケーションです。'
  }
  return 'Linux版'
}

type State = {
  link: string,
  text: string,
}

export default class Download extends Component {
  state: State = { link: '', text: 'Mac版' }
  componentWillMount() {
    this.init()
  }
  async init() {
    const { os: { family } } = platfrom
    const version = await getPkgVersion()

    this.setState({
      link: getDownloadLink(version, family),
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
