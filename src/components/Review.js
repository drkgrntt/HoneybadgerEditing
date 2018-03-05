import React, { Component } from 'react';
import _ from 'lodash';
import { Container, Grid, Item, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import ReviewForm from './ReviewForm';
import Contact from './Contact';
import { fetchReviews, deleteReview, fetchReview } from '../actions';

class Review extends Component {
  componentDidMount() {
    this.props.fetchReviews();
  }

  onDeleteClick(review) {
    this.props.deleteReview(review);
  }

  onEditClick(review) {
    this.props.fetchReview(review);
    window.scrollTo(0,400);
  }

  renderAdminButtons(review) {
    if (this.props.auth.user.isAdmin) {
      return (
        <div>
          <Button
            size="small"
            compact
            basic
            content="Edit"
            onClick={this.onEditClick.bind(this, review)}
            color="orange"
            className="admin-button"
          />
          <Button 
            size="small"
            compact
            basic
            content="Delete" 
            onClick={this.onDeleteClick.bind(this, review)}
            color="red"
            className="admin-button"
          />
        </div>
      );
    }
  }

  renderReviewSegment() {
    const { reviews } = this.props;

    if (reviews == false) {
      return <h1>Loading Reviews . . .</h1>;
    }

    return _.map(reviews, (review) => {
      return [
        <Item key={review.uid}>
          <Item.Content>
            {this.renderAdminButtons(review)}
            <Item.Header>{review.title}</Item.Header>
            <Item.Meta>{review.stars} stars</Item.Meta>
            <Item.Description className="text">{review.content}</Item.Description>
            <Item.Meta className="text">Reviewed by {review.name}</Item.Meta>
            <br /><hr />
          </Item.Content>
        </Item>
      ];
    }).reverse();
  }

  render() {
    return (
      <Container>
        <div className="widget">
          <h2 className="widget-title">Reviews</h2>
          <br />
          <Grid stackable>
            <Grid.Column width={1} />
            <Grid.Column width={9}>
              <Item.Group>
                {this.renderReviewSegment()}
              </Item.Group>
            </Grid.Column>
            <Grid.Column width={6}>
              <ReviewForm />
            </Grid.Column>
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
  const reviews = _.map(state.Reviews, (val, uid) => {
    return { ...val, uid };
  });
  const auth = state.Auth;

  return { reviews, auth };
};

export default connect(mapStateToProps, { fetchReviews, deleteReview, fetchReview })(Review);
