import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import renderHTML from 'react-render-html';
import { fetchBlogPosts } from '../actions';

class BlogWidget extends Component {
  componentDidMount() {
    this.props.fetchBlogPosts();
  }

  renderBlog() {
    const { Blogs } = this.props;

    return _.map(_.takeRight(Blogs, 1), (Blog) => {
      if (Blog.title === undefined) {
        return (
          <h2>Loading . . .</h2>
        );
      }

      return (
        <div>
          <h2 className="widget-title" style={{ marginBottom: '20px', marginLeft: '0' }}>{Blog.title}</h2>
          <p>{renderHTML(Blog.content.substring(0, 180))}. . .</p>
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
      );
    });
  }

  render() {
    return (
      <div className="widget">
        {this.renderBlog()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const Blogs = _.map(state.Blogs, (val, uid) => {
    return { ...val, uid };
  });

  return { Blogs };
};

export default connect(mapStateToProps, { fetchBlogPosts })(BlogWidget);
