import React from 'react';
import { useQuery, gql } from '@apollo/client'
import { initializeApollo } from '../infra/apollo/client'

const ShipsWithPilotsQuery = gql`
  query {
    ships {
      name 
      pilots {
        name
        image
        cost
        expertise
        enhancements
      }
    }
  }
`

export default function Home() {
  const {
    data: { ships, pilots },
  } = useQuery(ShipsWithPilotsQuery);

  return (
    <main>
      <p>TODO: Add query all entities by aliance</p>    
      <p>TODO: Get all enhancements images</p>
      <p>TODO: Create selection flow</p>
      <article>
        <h1>Ships:</h1>
        {/* <ul>
        {pilots.map((pilot) => (
          <li key={pilot.slug}>
            {pilot.name}
            ({pilot.cost})
            <img src={pilot.image} />
          </li>
        ))}
        </ul> */}
        <ul>
          {ships.map((ship) => (
            <li key={ship.slug}>
              {ship.name} [{ship.amount}]
              <ul>
              {ship.pilots.map((pilot) => (
                <li key={pilot.slug}>
                  {pilot.name}
                  ({pilot.cost})
                  <img src={pilot.image} />
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