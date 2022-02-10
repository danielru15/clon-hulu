import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requets from '../utils/requets'


export default function Home(results) {
  return (
    <div>
      <Head>
        <title>Hulu clon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}
      <Header/>
      {/* nav */}
      <Nav/>
      {/* results */}
      
      <Results 
        resultado={Object.values(results) }
        /* otra forma es 
        */
      />
      
    </div>
  )
}
export async function getServerSideProps(context)  {
  //context
  const genre = context.query.genre
  const request = await fetch(`https://api.themoviedb.org/3${
    requets[genre]?.url || requets.fetchTrending.url 
  }`
  ).then(res =>  res.json())

  return {
    props: {
      results: request.results,
    }
  }
}
