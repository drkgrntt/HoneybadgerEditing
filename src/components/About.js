import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import renderHTML from 'react-render-html';
import { Container, Grid, Card, Button } from 'semantic-ui-react';
import Contact from './Contact';
import { fetchProducts, fetchAbout } from '../actions';

class About extends Component {
  componentDidMount() {
    this.props.fetchProducts();
    this.props.fetchAbout();
  }

  renderEdit() {
    if (this.props.Auth.user.isAdmin) {
      return (
        <Link to="/admin/about">
          <Button
            compact
            basic
            content="Edit"
            color="orange"
            className="admin-button"
          />
        </Link>
      );
    }
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

  renderAbout() {
    if (this.props.About === undefined) {
      return <h3>Loading . . .</h3>;
    }

    return <p>{renderHTML(this.props.About)}</p>;
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
              {this.renderEdit()}
              {this.renderAbout()}
              <p className="text">Missouri LLC #LC001537575</p>
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

  return { Products, Auth: state.Auth, About: state.About.about };
};

export default connect(mapStateToProps, { fetchProducts, fetchAbout })(About);
