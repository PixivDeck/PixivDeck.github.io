// @flow
import React, { Component } from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Container from '../components/Container'
import Download from '../components/Download'
import Center from '../components/Center'
import Title from '../components/Title'
import DemoVideo from '../components/DemoVideo'

export default class Index extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <Container>
          <div className="top">
            <Center>
              <Title />
              <img
                src="/static/ogp.png"
                alt="top image"
                className="top-image"
              />
            </Center>
          </div>
          <Download />
          <div className="benefit row">
            <div className="text">
              <Center>
                <h2>マルチカラム</h2>
                <p>
                  ブックマークと新着イラストとランキング。 <br />すべてを一度に閲覧できます。
                </p>
              </Center>
            </div>
            <video
              alt="https://gyazo.com/f34004a49651f2411902eeb3948b5280"
              width="504"
              autoPlay
              muted
              loop
              playsinline
            >
              <source
                src="https://i.gyazo.com/f34004a49651f2411902eeb3948b5280.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          <div className="benefit">
            <div className="text">
              <Center>
                <h2>高度なフィルタ</h2>
                <p>
                  1000users入りの画像が見たい？ PixivDeckなら一瞬で切り替え。<br />
                  users入りタグが存在しない？<br />
                  大丈夫。ブックマーク数でフィルタ可能です
                </p>
              </Center>
            </div>
            <Center direction="row">
              <video
                alt="https://gyazo.com/4ff409d148ef3b87be7413be8ca9e952"
                width="414"
                autoPlay
                muted
                loop
                playsinline
              >
                <source
                  src="https://i.gyazo.com/4ff409d148ef3b87be7413be8ca9e952.mp4"
                  type="video/mp4"
                />
              </video>
            </Center>
          </div>

          <div className="benefit row">
            <div className="text">
              <Center>
                <h2>ワンクリックブックマーク</h2>
                <p>お気に入りのイラストを見つけたらワンクリックでブックマーク。</p>
              </Center>
            </div>
            <Center direction="row">
              <video
                alt="https://gyazo.com/74579a531ef5a0a2e1c50ac79f203dc0"
                width="612"
                autoPlay
                muted
                loop
                playsinline
              >
                <source
                  src="https://i.gyazo.com/74579a531ef5a0a2e1c50ac79f203dc0.mp4"
                  type="video/mp4"
                />
              </video>
            </Center>
          </div>

          <div className="benefit row">
            <div className="text">
              <h2>他にもいろんな機能がたくさん</h2>
              <ul>
                <li>デスクトップ通知</li>
                <li>オリジナルサイズの画像のダウンロード</li>
                <li>閲覧履歴</li>
                <li>NGキーワード</li>
                <li>English サポート</li>
                <li>自動アップデート</li>
              </ul>
            </div>
            <DemoVideo videoId="DsL9NC8cWVE" />
          </div>
          <div className="benefit row">
            <h2>PixivDeckを入手</h2>
            <img src="/static/logo.png" className="logo" />
            <Download />
          </div>
        </Container>
        <style jsx>{`
          .top-image {
            width: 100%;
          }
          .logo {
            max-width: 150px;
          }
          ul {
            display: flex;
            justify-content: center;
            flex-direction: column;
            font-size: 16px;
            margin-left: 60px;
            margin-bottom: 20px;
          }
          li {
          }
          .top {
            margin-top: 20px;
            margin-bottom: 30px;
          }
          .benefit {
            margin-top: 100px;
            margin-bottom: 40px;
            display: flex;
            justify-content: center;
            flex-direction: row;
            align-items: center;
          }
          .benefit > * {
            margin-left: 20px;
            margin-right: 20px;
          }
          .benefit:last-child {
            margin-bottom: 180px;
          }
          .benefit:last-child h2 {
            margin-bottom: 100px;
          }
          .row {
            flex-direction: column;
          }
          video {
            margin-left: 20px;
            margin-right: 20px;
            max-width: 90%;
            max-height: 600px;
          }
          @media screen and (max-width: 770px) {
            video {
              max-height: 500px;
            }
            .benefit {
              flex-direction: column;
            }
          }
          .benefit h2 {
            font-size: 36px;
            margin-bottom: 20px;
            font-weight: 300;
            line-height: 1.25;
          }
          .benefit p {
            margin-bottom: 30px;
          }
          .text {
            margin: 0 10px;
          }
          .text p {
            font-size: 14px;
          }
          p {
            font-size: 20px;
            color: #5a5252;
          }
        `}</style>
      </Layout>
    )
  }
}
