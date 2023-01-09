import React from "react"
import {MainScreen3d} from "../components/MainScreen3d";

// This gets called on every request
// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//   const data = await res.json();
//   // Pass data to the page via props
//   return { props: { data } }
// }

export async function getStaticProps() {
    return {props: {name: 123}}
}

function HomePage({data}) {
    return <div>

        <MainScreen3d/>

        <div className={'text-blue-400'}>
            Welcome to Next.js!: {JSON.stringify(data)}
        </div>

    </div>
}

export default HomePage;