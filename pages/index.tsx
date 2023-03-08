import React from 'react';
import dynamic from 'next/dynamic';
// import MainScreen3d from '../components/MainScreen3d';

const MainScreen3d = dynamic(() => import('../components/MainScreen3d'), {
  ssr: false,
});

// // This gets called on every request
// // export async function getServerSideProps() {
// //   // Fetch data from external API
// //   const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
// //   const data = await res.json();
// //   // Pass data to the page via props
// //   return { props: { data } }
// // }
//

export async function getStaticProps() {
  return { props: { name: 'test' } };
}

function HomePage() {
  return (
    <div>
      <MainScreen3d />
    </div>
  );
}

export default HomePage;
