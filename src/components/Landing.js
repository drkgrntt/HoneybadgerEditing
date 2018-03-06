import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import Logo from './Logo';
import BlogWidget from './BlogWidget';
import EditedWorks from './EditedWorks';
import Contact from  './Contact';
import FacebookFeed from './FacebookFeed';
import TwitterFeed from './TwitterFeed';

class Landing extends Component {
  renderComputerContact() {
    let width = window.innerWidth;

    if (width > 900) {
      return (
        <div>
          <h2 style={{ marginTop: '15px' }} className="section-title">Contact</h2>
          <div className="center">
            <Contact />
          </div>
        </div>
      );
    }
  }

  renderMobileContact() {
    let width = window.innerWidth;

    if (width < 900) {
      return (
        <div>
          <h2 className="section-title">Contact</h2>
          <div className="center">
            <Contact />
          </div>
        </div>
      );
    }
  }

  renderComputerBlog() {
    let width = window.innerWidth;

    if (width > 900) {
      return (
        <div>
          <h2 className="section-title">Feature Blog Post</h2>
          <BlogWidget />
        </div>
      );
    }
  }

  renderMobileBlog() {
    let width = window.innerWidth;

    if (width < 900) {
      return (
        <div>
          <h2 className="section-title">Feature Blog Post</h2>
          <BlogWidget />
        </div>        
      );
    }
  }


  render() {
    return (
      <div className="body">
        <Grid doubling stackable>
          <Grid.Column width={12}>
            <Grid.Row>
              <Grid stackable>
                <Grid.Column className="no-space" width={5}>
                  <div className="center">
                    <Logo />
                    {this.renderComputerBlog()}
                  </div>
                </Grid.Column>
                <Grid.Column className="no-space" width={11}>
                  <h2 className="section-title">Edited Works</h2>
                  <div className="center">
                    <EditedWorks />
                  </div>
                </Grid.Column>
                {this.renderMobileBlog()}
              </Grid>
            </Grid.Row>
            <Grid.Row>
              {this.renderComputerContact()}
            </Grid.Row>
          </Grid.Column>
          <Grid.Column className="no-space" width={4}>
            <h2 className="section-title">Social</h2>
            <div className="center">
              <TwitterFeed />
              <FacebookFeed />
            </div>
            {this.renderMobileContact()}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Landing;
