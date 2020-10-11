import React, { Fragment } from 'react';
import { useQuery, gql } from '@apollo/client'
import { initializeApollo } from '../infra/apollo/client'

const ShipsWithPilotsQuery = gql`
  query {
    aliances {
      name
      image
      ships {
        name
        image
        amount
        pilots {
          name
          image
          cost
        }
      }
    }
  }
`

export default function Home() {
  const {
    data: { aliances },
  } = useQuery(ShipsWithPilotsQuery);

  return (
    <main>
      <p>TODO: Create selection flow</p>
      <p>TODO: Get all ships images</p>
      <p>TODO: Get all enhancements images</p>

      <article>
        <h1>Aliances</h1>
        <ul>
          {aliances.map((aliance) => (
            <li key={aliance.name}>
              <h2>{aliance.name}</h2>
              <img src={aliance.image} />
              <ul>
              {aliance.ships.map((ship) => (
                <li>
                  <h3>{ship.name} [{ship.amount}]</h3>
                  <img src={ship.image} />
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