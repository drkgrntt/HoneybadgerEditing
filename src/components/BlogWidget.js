import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchBlogPosts } from '../actions';

class BlogWidget extends Component {
  componentDidMount() {
    this.props.fetchBlogPosts();
    console.log(this.props.Blog);
  }

  render() {
    return (
      <div className="widget">
        Blog
      </div>
    );
  }
}

const mapStateToProps = ({ Blogs }) => {
  const Blog = _.takeRight(Blogs, 1);

  return { Blog };
};

export default connect(mapStateToProps, { fetchBlogPosts })(BlogWidget);
