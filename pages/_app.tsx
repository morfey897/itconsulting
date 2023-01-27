import React from 'react';
import '../styles/globals.css';
import '../styles/styles.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <main className=''>
      <Component {...pageProps} />
    </main>
  );
}
