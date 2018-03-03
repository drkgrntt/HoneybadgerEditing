import React, { Component } from 'react';
import { Container, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import renderHTML from 'react-render-html';
import { fetchBlogPost, deleteBlogPost } from '../actions';

class ShowBlog extends Component {
  componentDidMount() {
    const { fetchBlogPost } = this.props;
    const { uid } = this.props.match.params;

    fetchBlogPost(uid);
    window.scrollTo(0,0);
  }

  onDeleteClick() {
    const { deleteBlogPost, uid, history } = this.props;

    deleteBlogPost(uid, history);
  }

  onEditClick() {
    const { fetchBlogPost, uid } = this.props;

    fetchBlogPost(uid);
  }

  renderAdminButtons() {
    const { Auth, uid } = this.props;

    if (Auth.user.isAdmin) {
      return (
        <div>
          <Link to="/admin/dashboard">
            <Button
              compact
              basic
              content="Edit"
              onClick={this.onEditClick.bind(this)}
              color="orange"
              className="admin-button"
            />
          </Link>
          <Button 
            compact
            basic
            content="Delete" 
            onClick={this.onDeleteClick.bind(this)}
            color="red"
            className="admin-button"
          />
        </div>
      );
    }    
  }

  render() {
    const { Blog } = this.props;

    if (!Blog || Blog.title === undefined) {
      return <h1>Loading . . .</h1>;
    }

    return (
      <Container className="widget">
        <h1 className="widget-title">Blog</h1>
        <div className="blog">
          <h2 style={{ borderBottom: '1px solid #eaeaea'}}>{Blog.title}</h2>
          <p className="blog-content">{renderHTML(Blog.content)}</p>
          <hr />
          <Link className="button-text" to="/blog">
            <Button compact basic color="black">
              Back
            </Button>
          </Link>
          {this.renderAdminButtons()}
        </div>
      </Container>
    );
  }
}

const mapStateToProps = ({ Blogs, Auth }) => {
  return { Blog: Blogs.selectedBlog, uid: Blogs.selectedUid, Auth };
};

export default connect(mapStateToProps, { fetchBlogPost, deleteBlogPost })(withRouter(ShowBlog));
