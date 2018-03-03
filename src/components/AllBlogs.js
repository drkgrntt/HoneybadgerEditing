import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { Container, Button } from 'semantic-ui-react';
import renderHTML from 'react-render-html';
import { connect } from 'react-redux';
import { fetchBlogPosts } from '../actions';

class AllBlogs extends Component {
  componentDidMount() {
    this.props.fetchBlogPosts();
    window.scrollTo(0,400);
  }

  renderBlogPosts() {
    const { Blogs } = this.props;
    console.log(Blogs);

    return _.map(Blogs, (Blog) => {
      if (Blog.title === undefined) {
        return (
          <h4>Loading . . .</h4>
        );
      }

      return (
        <div key={Blog.uid}>
          <div className="blog">
            <h2 style={{ borderBottom: '1px solid #eaeaea' }}>{Blog.title}</h2>
            <p className="blog-content">{renderHTML(Blog.content.substring(0, 200))} . . . </p>
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
        <h1 className="widget-title">All Blog Posts</h1>
        {this.renderBlogPosts()}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const Blogs = _.map(state.Blogs, (val, uid) => {
    return { ...val, uid };
  });

  return { Blogs };
};

export default connect(mapStateToProps, { fetchBlogPosts })(AllBlogs);
