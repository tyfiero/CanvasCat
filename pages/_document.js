import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className={""}>
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
          <link rel="shortcut icon" href="/assets/icons/favicon.ico" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="msapplication-config" content="/browserconfig.xml" />
          <meta name="theme-color" content="#000" />
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
          <meta
            name="description"
            content={`AI Business Model Canvas generator.`}
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />

          <link
            href="https://fonts.googleapis.com/css2?family=Lato&family=Carter+One&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-white dark:bg-slate-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
