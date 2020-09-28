import React from 'react';
import { useQuery, gql } from '@apollo/client'
import { initializeApollo } from '../infra/apollo/client'

const PilotsQuery = gql`
  query {
    pilots {
      slug,
      name,
      cost
    }
  }
`

export default function Home() {
  const {
    data: { pilots },
  } = useQuery(PilotsQuery);

  return (
    <main>

      <article>
        <h1>Pilots:</h1>
        <ul>
          {pilots.map((pilot) => (
            <li key={pilot.slug}>
              {pilot.name}
              ({pilot.cost})
            </li>
          ))}
        </ul>
      </article>

    </main>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: PilotsQuery,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}