// @flow
import React from 'react'
import Head from 'next/head'
import { initGA, logPageView } from '../utils/analytics'

type Props = {
  children?: React.Element<*>,
}

export default class Layout extends React.Component {
  props: Props
  componentDidMount() {
    if (!window.IS_GA_INIT) {
      initGA()
      window.IS_GA_INIT = true
    }
    logPageView()
  }
  render() {
    return (
      <main>
        <Head>
          <title>PixivDeck - マルチカラム多機能pixivクライアント</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content="PixivDeck: マルチカラム多機能pixivクライアント" />
          <meta
            property="og:url"
            content="https://akameco.github.io/PixivDeck-web"
          />
          <meta property="og:site_name" content="https://akameco.github.io" />

          <meta
            name="description"
            content="マルチカラムでたくさんのイラストを一度に閲覧。無料ダウンロード。ワンクリックブックマーク。ブックマークフィルタ。新着のデスクトップ通知。閲覧履歴等多くの機能がサポートされてます。"
          />

          <meta
            property="og:description"
            content="マルチカラムでたくさんのイラストを一度に閲覧。無料ダウンロード。ワンクリックブックマーク。ブックマークフィルタ。新着のデスクトップ通知。閲覧履歴等多くの機能がサポートされてます。"
          />

          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://akameco.github.io/PixivDeck-web/static/ogp.png"
          />

          <meta property="fb:app_id" content="161451777749561" />

          <meta name="twitter:card" content="photo" />
          <meta name="twitter:site" content="@akameco" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon-16x16.png"
          />
          <link
            rel="mask-icon"
            href="/static/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        {this.props.children}
        <style jsx global>
          {`
            html,
            body,
            * {
              margin: 0;
              padding: 0;
            }
            button {
              border: none;
            }
          `}
        </style>
      </main>
    )
  }
}
