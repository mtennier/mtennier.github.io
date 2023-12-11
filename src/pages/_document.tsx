import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      {/* Load fonts */}
      <link
          href="https://fonts.googleapis.com/css2?family=Lora:wght@350;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito"
          rel="stylesheet"
        />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
