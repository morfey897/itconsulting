
import React from 'react';
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <main className=''>
      <Component {...pageProps} />
    </main>
  )
}