import React from 'react';
import { Grid } from 'semantic-ui-react';
import Logo from './Logo';
import BlogWidget from './BlogWidget';
import EditedWorks from './EditedWorks';
import Contact from  './Contact';
import FacebookFeed from './FacebookFeed';
import TwitterFeed from './TwitterFeed';

const Landing = () => {
  return (
    <div className="body">
      <Grid doubling stackable>
        <Grid.Column width={12}>
          <Grid.Row>
            <Grid stackable>
              <Grid.Column className="no-space" width={5}>
                <div className="center">
                  <Logo />
                  <h2 className="section-title">Feature Blog</h2>
                  <BlogWidget />
                </div>
              </Grid.Column>
              <Grid.Column className="no-space" width={11}>
                <h2 className="section-title">Edited Works</h2>
                <div className="center">
                  <EditedWorks />
                </div>
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
        <Grid.Column className="no-space" width={4}>
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
