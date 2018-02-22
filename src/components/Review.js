import React, { Component } from 'react';
import _ from 'lodash';
import { Container, Grid, Item } from 'semantic-ui-react';
import { connect } from 'react-redux';
import ReviewForm from './ReviewForm';
import Contact from './Contact';
import { fetchReviews } from '../actions';

class Review extends Component {
  componentDidMount() {
    this.props.fetchReviews();
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
            <Item.Header>{review.title}</Item.Header>
            <Item.Meta>{review.stars} stars</Item.Meta>
            <Item.Description>{review.content}</Item.Description>
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

  return { reviews };
};

export default connect(mapStateToProps, { fetchReviews })(Review);
