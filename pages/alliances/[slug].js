import React from 'react';
import { useQuery, gql } from '@apollo/client'
import { initializeApollo } from '../../infra/apollo/client';
import Link from '../../src/infra/components/Link';
import Menu from '../../src/patterns/Menu';
import Text from '../../src/components/foundation/Text';
import Button from '../../src/components/foundation/Button';
import Grid from '../../src/components/layout/Grid';
import Container from '../../src/components/layout/Container';
import Card, {
  CardActions,
  CardContent,
  CardMedia
} from '../../src/patterns/Card';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
}));

const allianceWithShipsQuery = gql`
  query($type: AllianceName!) {
    alliance(input: { type: $type}) {
      type
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

export default function Alliance({ allianceType }) {
  const classes = useStyles();

  const { data, error, loading } = useQuery(allianceWithShipsQuery, {
    variables: {
      type: allianceType,
    }
  });

  if (loading) return 'Loading...';
  if (error || !data) return `Error! ${error.message}`;

  const { alliance } = data;
  const hasShips = Boolean(alliance.ships.length);
  return ( 
    <main>
      <Menu />

      <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(https://placehold.it/1000x500)` }}>
        <div style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }} />
        <Container maxWidth="md">
          <Grid container>
            <Grid item md={6}>
              <div className={classes.mainFeaturedPostContent}>
                <Text component="h1" variant="h3" color="inherit" gutterBottom>
                  {alliance.name}
                </Text>
                <img src={alliance.image} style={{ width: '100px' }} />
              </div>
            </Grid>
          </Grid>
        </Container>
      </Paper>

      <Container maxWidth="md">
        {hasShips && (
          <Grid container spacing={4}>
            {alliance.ships.map((ship) => (
              <Grid item key={ship.name} xs={12} sm={6} md={4}>
                  <Card>
                    <CardMedia
                      image={ship.image}
                      title="Image title"
                      style={{
                        paddingTop: '56.25%'
                      }}
                    />
                    <CardContent>
                      <Text
                        component="h2"
                        variant="h5"
                        color="textPrimary"
                      >
                        {ship.name}
                      </Text>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="secondary">
                        Escolher
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
          </Grid>
        )}
      </Container>

      <p>
        <Link href="/" variant="subtitle1">
          Voltar para seleção de aliança
        </Link>
      </p>
    </main>
  );
};

export async function getStaticProps({ params }) {
  const allianceType = params.slug.toUpperCase();
  const apolloClient = initializeApollo();

  await apolloClient
    .query({
      query: allianceWithShipsQuery,
      variables: { type: allianceType }
    })



  return {
    props: {
      ...params,
      allianceType,
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