import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Grid } from 'semantic-ui-react';
import ProductList from './ProductList';
import ProductForm from './ProductForm';

class Dashboard extends Component {
  renderAdminContent() {
    if (this.props.Auth.user.isAdmin) {
      return (
        <Grid stackable>
          <h2>This is the admin dashboard!</h2>
          <Grid.Row>
            <Grid.Column width={8}>
              <h2 className="section-title">Services</h2>
              <ProductList />
            </Grid.Column>
            <Grid.Column width={8}>
              <h2 className="section-title">Add a service</h2>
              <ProductForm />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      );
    }

    return (
      <h2>
        Please <Link to="/login">login</Link> to see the admin dashboard.
      </h2>
    );
  }
  
  render() {
    return (
      <Container>
        {this.renderAdminContent()}
      </Container>
    );
  }
}

const mapStateToProps = ({ Auth }) => {
  return { Auth };
};

export default connect(mapStateToProps, null)(Dashboard);
