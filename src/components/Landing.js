import React from 'react';
import { Grid } from 'semantic-ui-react';
import Logo from './Logo';
import EditedWorks from './EditedWorks';
import Contact from  './Contact';
import FacebookFeed from './FacebookFeed';
import TwitterFeed from './TwitterFeed';

const Landing = () => {
  return (
    <div>
      <Grid doubling stackable>
        <Grid.Column width={11}>
          <Grid.Row>
            <Grid stackable>
              <Grid.Column width={1} />
              <Grid.Column width={6}>
                <Logo />
              </Grid.Column>
              <Grid.Column width={9}>
                <h2 className="section-title">Edited Works</h2>
                <EditedWorks />
              </Grid.Column>
            </Grid>
          </Grid.Row>
          <Grid.Row>
            <h2 className="section-title">Contact</h2>
            <div className="center">
              <Contact />
            </div>
          </Grid.Row>
        </Grid.Column>
        <Grid.Column width={5}>
          <h2 className="section-title">Social</h2>
          <div className="center">
            <TwitterFeed />
            <FacebookFeed />
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default Landing;
