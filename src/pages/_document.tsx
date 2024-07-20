import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <link
          rel="preload"
          href="/calcs/fonts/inter-var-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="manifest" href="/calcs/manifest.json" />
        <link rel="apple-touch-icon" href="/calcs/icon-192x192.png" />
        <meta name="theme-color" content="#042940" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
