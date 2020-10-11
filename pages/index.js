import React from 'react';
import { useQuery, gql } from '@apollo/client'
import { initializeApollo } from '../infra/apollo/client'
import Link from '../src/infra/components/Link';

const alliancesQuery = gql`
  query {
    alliances {
      name
      image
      slug
    }
  }
`

export default function Home() {
  const {
    data: { alliances },
  } = useQuery(alliancesQuery);

  return (
    <main>
      <article>
        <h1>Aliances</h1>
        <ul>
          {alliances.map((alliance) => (
            <li key={alliance.name}>
              <Link href={`/alliances/${alliance.slug}`}>
                <h2>{alliance.name}</h2>
                <img src={alliance.image} style={{ width: '100px' }} />
              </Link>
            </li>
          ))}
        </ul>
      </article>

    </main>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: alliancesQuery,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}