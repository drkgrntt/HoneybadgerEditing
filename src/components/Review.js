import React, { Component } from 'react';
import { Container, Grid, Item } from 'semantic-ui-react';
import ReviewForm from './ReviewForm';
import Contact from './Contact';

class Review extends Component {
  render() {
    return (
      <Container>
        <div className="widget">
          <h2 className="widget-title">Reviews</h2>
          <Grid stackable>
            <Grid.Column width={1} />
            <Grid.Column width={9}>
              <Item.Group>
                <Item>
                  <Item.Content>
                    <Item.Header>Some Header</Item.Header>
                    <Item.Meta>5 stars</Item.Meta>
                    <Item.Description>
                      Elle is an amazing editor who cares about your work. She edited my first novel which is now published on Amazon. I would not have been able to do this without her skill and passion. Thanks to her I published a book of amazing quality. If you're looking for an editor don't hesitate to check Honeybadger Editing out!
                    </Item.Description>
                  </Item.Content>
                </Item>
                <hr />
                <Item>
                  <Item.Content>
                    <Item.Header>Some Header</Item.Header>
                    <Item.Meta>5 stars</Item.Meta>
                    <Item.Description>
                      Elle is an amazing editor who cares about your work. She edited my first novel which is now published on Amazon. I would not have been able to do this without her skill and passion. Thanks to her I published a book of amazing quality. If you're looking for an editor don't hesitate to check Honeybadger Editing out!
                    </Item.Description>
                  </Item.Content>
                </Item>
                <hr />
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

export default Review;
