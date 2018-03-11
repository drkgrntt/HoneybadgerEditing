import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import TextEditor from '../TextEditor';
import { saveBlogPost, updateBlogPost } from '../../actions';

class BlogPostForm extends Component {
  componentDidMount() {
    if (this.props.initialValues) {
      window.scrollTo(0, 1500);
    }
  }

  renderTextField(field) {
    return (
      <div>
        <h3>{field.label}</h3>
        <input
          placeholder={field.label}
          type="text"
          className="text-input"
          {...field.input}
        />
      </div>
    );
  }

  onSubmit(values) {
    const { initialValues, saveBlogPost, updateBlogPost, uid, history } = this.props;

    if (initialValues) {
      return updateBlogPost(values, uid, history);
    }

    return saveBlogPost(values, history);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="widget center-text">
        <form>
          <Field
            label="Post Title"
            name="title"
            component={this.renderTextField}
          />
          <h3>Post Content</h3>
          <Field
            name="content"
            component={TextEditor}
          />
          <br />
          <Button
            onClick={handleSubmit(this.onSubmit.bind(this))}
            basic
            color="black"
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ Blogs }) => {
  return { initialValues: Blogs.selectedBlog, uid: Blogs.selectedUid };
};

const formConfig = reduxForm({
  form: 'BlogPostForm',
  enableReinitialize: true
})(BlogPostForm);

export default connect(mapStateToProps, { saveBlogPost, updateBlogPost })(withRouter(formConfig));
