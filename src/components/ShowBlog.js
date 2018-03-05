import React, { Component } from 'react';
import _ from 'lodash';
import { Container, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import renderHTML from 'react-render-html';
import CommentForm from './CommentForm';
import { fetchBlogPost, deleteBlogPost, fetchComment, deleteComment } from '../actions';

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

  renderCommentForm() {
    const { Auth, uid } = this.props;

    if (Auth.user) {
      return <CommentForm uid={uid} username={Auth.user.username} />;    
    }

    return (
      <h3 className="center-text">
        <Link to="/login">Log in</Link> or <Link to="/register">sign up</Link> to comment!
      </h3>
    );
  }

  onEditCommentClick(uid, comment_uid) {
    this.props.fetchComment(uid, comment_uid);
  }

  onDeleteCommentClick(uid, comment_uid) {
    this.props.deleteComment(uid, comment_uid);
  }

  renderCommentButtons(comment, comment_uid) {
    const { Auth, uid } = this.props;

    if (Auth.user.isAdmin || Auth.user.username === comment.author) {
      return (
        <div>
          <Button
            compact
            basic
            content="Edit"
            onClick={this.onEditCommentClick.bind(this, uid, comment_uid)}
            color="orange"
            className="admin-button"
          />
          <Button 
            compact
            basic
            content="Delete" 
            onClick={this.onDeleteCommentClick.bind(this, uid, comment_uid)}
            color="red"
            className="admin-button"
          />
        </div>
      );
    }      
  }

  renderCommentSection() {
    const { comments } = this.props.Blog;

    if (comments) {
      return _.map(comments, (comment, uid) => {
        return (
          <div className="blog" key={uid}>
            <div className="blog-content">
              {this.renderCommentButtons(comment, uid)}
              <p>{comment.content}</p>
              <p><em>-{comment.author}</em></p>
            </div>
            <hr />
          </div>
        );
      });
    }

    return (
      <div className="center-text">
        <br />
        <h3>Be the first to leave a comment!</h3>
        <br />
      </div>
    );
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
          <div style={{ marginBottom: '30px' }}>
            <Link className="blog-button" to="/blog">
              <Button compact basic color="black">
                Back
              </Button>
            </Link>
            {this.renderAdminButtons()}
            <br /><br />
            <h2 className="section-title">Comments</h2>
            {this.renderCommentSection()}
            {this.renderCommentForm()}
          </div>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = ({ Blogs, Auth }) => {
  return { Blog: Blogs.selectedBlog, uid: Blogs.selectedUid, Auth };
};

export default connect(mapStateToProps, { fetchBlogPost, fetchComment, deleteBlogPost, deleteComment })(withRouter(ShowBlog));
