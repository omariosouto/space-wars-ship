import React from 'react';
import { useQuery, gql } from '@apollo/client'
import { initializeApollo } from '../infra/apollo/client'

const ShipsWithPilotsQuery = gql`
  query {
    ships {
      name,
      slug,
      pilots {
        name,
        slug,
        cost
      }
    }
  }
`

export default function Home() {
  const {
    data: { ships },
  } = useQuery(ShipsWithPilotsQuery);

  return (
    <main>

      <article>
        <h1>Pilots:</h1>
        <ul>
          {ships.map((ship) => (
            <li key={ship.slug}>
              {ship.name}
              <ul>
              {ship.pilots.map((pilot) => (
                <li key={pilot.slug}>
                  {pilot.name}
                  ({pilot.cost})
                </li>
              ))}
              </ul>
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
    query: ShipsWithPilotsQuery,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}