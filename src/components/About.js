import React from 'react';
import { Container, Grid, Card } from 'semantic-ui-react';
import Contact from './Contact';

const items = [
  {
    header: 'Novels',
    description: 'Starting at $150.00',
    extra: 'Dependent upon length and quality of product'
  },
  {
    header: 'Short Stories',
    description: '$10.00-50.00',
    extra: 'Dependent upon length and quality of product'
  },
  {
    header: 'Scholarly Papers',
    description: '$2.50',
    extra: 'Price per page, up to 35 pages'
  },
  {
    header: 'Sholarship Letters',
    description: '$5.00',
  },
  {
    header: 'Resumes',
    description: '$2.00-5.00',
    extra: 'Dependent upon length'
  },
  {
    header: 'Cover Letters',
    description: '$5.00',
  },
  {
    header: 'Letters of Interest (business)',
    description: '$5.00',
    extra: ''
  },
  {
    header: 'Other',
    description: 'Pricing negotiated depending upon product',
  }
]

const About = () => {
  return (
    <Container>
      <div className="widget">
        <h2 className="widget-title">About Me</h2>
        <Grid>
          <Grid.Column width={2} />
          <Grid.Column width={12}>
            <br />
            <p>Elinor Mealer is the sole proprietor of Honeybadger Editing. She holds a Bachelor of Arts in English from Hannibal-LaGrange University, and a Master’s in Creative Writing from Southern New Hampshire University. Mealer has worked with two published authors on a novel and a nonfiction manuscript. Additionally, she has annotated and edited multiple resumes, scholarship letters, and cover letters.
            Preferring to be called El, she enjoys reading and Netflixing. Her dog, Benny, is the light of her life and she dotes on him with no shame.
            And yes, she deliberately made “honey badger” a single word.</p>
            <p>Missouri LLC #LC001537575</p>
          </Grid.Column>
          <Grid.Column width={2} />
        </Grid>
        <br /><br />
        <h2 className="widget-title">Services/Pricing:</h2>
        <Grid>
          <Grid.Column width={1} />
          <Grid.Column width={14}>
            <br />
            <Grid columns={3}>
              <Card.Group stackable doubling items={items} />
            </Grid>
            <br /><br />
            <h3 className="section-title">Notes</h3>
              <ul>
                <li>Most pricing negotiable</li>
                <li>Novels over 300 pages of basic typed font will incur a $25 charge for every 15 pages.</li>
              </ul>
          </Grid.Column>
          <Grid.Column width={1} />
        </Grid>
      </div>
      <br /><br />
      <Grid stackable>
        <Grid.Column width={2} />
        <Grid.Column width={12}>
          <h1 className="widget-title">Get in touch!</h1>
          <Contact />      
        </Grid.Column>
        <Grid.Column width={2} />
      </Grid>
    </Container>
  );
}

export default About;
