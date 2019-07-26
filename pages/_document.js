// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'



export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [...initialProps.styles, ...sheet.getStyleElement()]
      }
    } finally {
      sheet.seal()
    }
  }

  render () {
    return (
      <html>
        <title>Talk n Chip</title>
        <Head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <meta property="og:type" content="company" />
          <meta property="og:url" content="" />
          <meta property="og:image" content="../static/img/OG.png" />
          <link href='/static/css/styles.css' rel='stylesheet' />
          <link rel="stylesheet" href="../static/css/bootstrap.css" crossOrigin="anonymous" type="text/css" />
          <link rel="shortcut icon" href="/static/img/favicon/favicon.ico" type="image/x-icon"/>
          <link rel="apple-touch-icon" sizes="60x60" href="/fv-apple.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/static/img/favicon/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/static/img/favicon/favicon-16x16.png"/>
          <link rel="manifest" href="/static/img/favicon/site.webmanifest"/>
          <link rel="mask-icon" href="/static/img/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
          <link href='https://fonts.googleapis.com/css?family=Athiti:400,500,700' rel='stylesheet' />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
          </body>
      </html>
    )
  }
}
