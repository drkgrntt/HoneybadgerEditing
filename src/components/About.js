import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Container, Grid, Card } from 'semantic-ui-react';
import Contact from './Contact';
import { fetchProducts } from '../actions';

class About extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  renderServices() {
    if (this.props.Products == false) {
      return <h1>Loading services . . .</h1>;
    }

    return _.map(this.props.Products, (Product) => {
      return [
        <Card key={Product.uid}>
          <Card.Content>
            <Card.Header>{Product.service}</Card.Header>
            <hr />
            <Card.Description>{Product.price}</Card.Description>
            <br />
            <Card.Meta>{Product.note}</Card.Meta>
          </Card.Content>
        </Card>
      ];
    });
  }

  render() {
    return (
      <Container>
        <div className="widget">
          <h2 className="widget-title">About Me</h2>
          <Grid>
            <Grid.Column width={2} />
            <Grid.Column width={12}>
              <br />
              <p>Elinor Mealer is the sole proprietor of Honeybadger Editing. 
              She holds a Bachelor of Arts in English from Hannibal-LaGrange University, 
              and a Master’s in Creative Writing from Southern New Hampshire University. 
              Mealer has worked with two published authors on a novel and a nonfiction 
              manuscript. Additionally, she has annotated and edited multiple resumes, 
              scholarship letters, and cover letters.
              Preferring to be called El, she enjoys reading and Netflixing. 
              Her dog, Benny, is the light of her life and she dotes on him with no shame.</p>
              <p>And yes, she deliberately made “honey badger” a single word.</p>
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
                <Card.Group stackable doubling>
                  {this.renderServices()}
                </Card.Group>
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
}

const mapStateToProps = (state) => {
  const Products = _.map(state.Products, (val, uid) => {
    return { ...val, uid };
  });

  return { Products };
};

export default connect(mapStateToProps, { fetchProducts })(About);
