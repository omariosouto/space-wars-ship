import React from 'react';
import { useQuery, gql } from '@apollo/client'
import { initializeApollo } from '../../infra/apollo/client';
import Link from '../../src/infra/components/Link';

const allianceWithShipsQuery = gql`
  query($name: AllianceName!) {
    alliance(input: { name: $name}) {
      name
      slug
      image
      ships {
        name
        image
        amount
      }
    }
  }
`

export default function Alliance({ allianceName }) {
  const { data: { alliance } } = useQuery(allianceWithShipsQuery, {
    variables: {
      name: allianceName,
    }
  });

  const hasShips = Boolean(alliance.ships.length);

  return (
    <div>
      <h1>Alliance: {alliance.slug}</h1>

      <img src={alliance.image} style={{ width: '100px' }} />

      {
        hasShips 
        ? (
          <ul>
            {alliance.ships.map((ship) => (
              <div key={ship.name}>
                <h2>{ship.name} [{ship.amount}x]</h2>

                <img src={ship.image} style={{ width: '400px' }} />
              </div>
            ))}
          </ul>
        )
        : (
          <p><strong>Ainda não temos naves de {alliance.name} :(</strong></p>
        )
      }

      <p>
        <Link href="/">
          Voltar para seleção de aliança
        </Link>
      </p>
    </div>
  );
};

export async function getStaticProps({ params }) {
  const allianceName = params.slug.toUpperCase();
  const apolloClient = initializeApollo();

  await apolloClient
    .query({
      query: allianceWithShipsQuery,
      variables: { name: allianceName }
    })

  return {
    props: {
      ...params,
      allianceName,
      initialApolloState: apolloClient.cache.extract(),
    }
  }
}

export async function getStaticPaths() {
  const apolloClient = initializeApollo();
  
  const { data } = await apolloClient.query({
    query: gql`
      query {
        alliances {
          slug
        }
      }
    `,
  })
  
  return {
    paths: data.alliances.map((alliance) => ({
      params: alliance
    })),
    fallback: true,
  };
}