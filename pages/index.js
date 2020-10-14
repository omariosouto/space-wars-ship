import React from 'react';
import { useQuery, gql } from '@apollo/client'
import { initializeApollo } from '../infra/apollo/client'

// Fixed
import Link from '../src/infra/components/Link';
import Text from '../src/components/foundation/Text';
import Grid from '../src/components/layout/Grid';
import Container from '../src/components/layout/Container';
import Box from '../src/components/layout/Box';
import Card, {
  CardActionArea,
  CardContent,
  CardMedia
} from '../src/patterns/Card';
import Menu from '../src/patterns/Menu';


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
      <Menu />

      <Container maxWidth="md">
        <Box paddingY={5}>
          <Text
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
          >
            Escolha uma Aliança
          </Text>
        </Box>
      </Container>

      <Container maxWidth="md">
        <Grid container spacing={4}>
            {alliances.map((alliance) => (
              <Grid item key={alliance.name} xs={12} sm={6} md={4}>
                <Card>
                  <CardActionArea
                    component={Link}
                    href={`/alliances/${alliance.slug}`}>
                    <CardMedia
                      image={alliance.image}
                      title="Image title"

                      style={{
                        paddingTop: '56.25%'
                      }}
                    />
                    <CardContent>
                      <Text
                        component="h2"
                        variant="h5"
                        align="center"
                        color="textPrimary"
                      >
                        {alliance.name}
                      </Text>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
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