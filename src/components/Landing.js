import React from 'react';
import { Grid } from 'semantic-ui-react';
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
              <Grid.Column width={5}>
                <img
                  style={{ marginTop: '45px' }}
                  className="image"
                  width="90%"
                  src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/17757276_1475146552519573_7674930973478994129_n.png?oh=91ebe7ccfa5343e13066f4073b0f0b1a&oe=5B1F5FDE"
                />
              </Grid.Column>
              <Grid.Column width={11}>
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
