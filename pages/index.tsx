import React from 'react';

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}

function HomePage({ data }) {
  return (
    <div className='text-blue-400'>
      Welcome to Next.js!: {JSON.stringify(data)}
    </div>
  );
}

export default HomePage;
