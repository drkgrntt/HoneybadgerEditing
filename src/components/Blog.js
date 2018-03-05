import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { Container, Button } from 'semantic-ui-react';
import renderHTML from 'react-render-html';
import { connect } from 'react-redux';
import { fetchBlogPosts } from '../actions';

class Blog extends Component {
  componentDidMount() {
    this.props.fetchBlogPosts();
    window.scrollTo(0,0);
  }

  renderNonAuth() {
    if (!this.props.Auth.user) {
      return (
        <div>
          <Link to="/login">
            <Button
              compact
              basic
              content="Login"
              color="black"
              className="admin-button"
            />
          </Link>
          <Link to="/register">
            <Button 
              compact
              basic
              content="Sign Up" 
              color="black"
              className="admin-button"
            />
          </Link>  
        </div>
      );
    }
  }

  renderBlogPosts() {
    const { Blogs } = this.props;

    return _.map(_.takeRight(Blogs, 5), (Blog) => {
      if (Blog.title === undefined) {
        return (
          <h4>Loading . . .</h4>
        );
      }

      return (
        <div key={Blog.uid}>
          <div className="blog">
            <h2 style={{ borderBottom: '1px solid #eaeaea' }}>{Blog.title}</h2>
            <p className="blog-content">{renderHTML(Blog.content.substring(0, 500))} . . . </p>
            <Link className="button-text" to={`/blog/${Blog.uid}`}>
              <Button 
                compact 
                basic 
                color="black"
              >    
                Read More
              </Button>
            </Link>
          </div>
          <hr /><hr />
        </div>
      );
    }).reverse();
  }

  render() {
    return (
      <Container className="widget">
        <h1 className="widget-title">Blog</h1>
        {this.renderNonAuth()}
        {this.renderBlogPosts()}
        <Link to="/blogs/all" style={{ margin: '30px' }}>
          <Button compact basic color="black">
            See all posts
          </Button>
        </Link>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const Blogs = _.map(state.Blogs, (val, uid) => {
    return { ...val, uid };
  });

  return { Blogs, Auth: state.Auth };
};

export default connect(mapStateToProps, { fetchBlogPosts })(Blog);
