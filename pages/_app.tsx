
import React from 'react';
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <main className=''>

        <div>123</div>
      <Component {...pageProps} />
    </main>
  )
}