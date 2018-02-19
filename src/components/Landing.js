import React from 'react';
import { Container } from 'semantic-ui-react';
import FacebookFeed from './FacebookFeed';
import TwitterFeed from './TwitterFeed';

const Landing = () => {
  return (
    <Container>
      <h1>Honeybadger Editing!</h1>
      <FacebookFeed />
      <TwitterFeed />
    </Container>
  );
}

export default Landing;
