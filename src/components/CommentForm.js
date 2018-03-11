import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { saveComment, updateComment } from '../actions';

class CommentForm extends Component {
  renderField(field) { 
    return (
      <div>
        <h3>{field.label}</h3>
        <textarea
          placeholder={field.label}
          type="text"
          rows="8"
          className="text-area-input"
          {...field.input}
        />
      </div>
    );
  }

  onSubmit(text) {
    const { initialValues, uid, comment_uid, username, saveComment, updateComment } = this.props;

    if (initialValues) {
      return updateComment(text, uid, comment_uid);
    }

    return saveComment(uid, text, username);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="center-text">
        <form>
          <Field
            label="Leave a comment!"
            name="content"
            component={this.renderField}
          />
          <Button 
            basic
            compact
            color="black"
            className="waves-light waves-effect btn"
            onClick={handleSubmit(this.onSubmit.bind(this))}
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ Blogs }) => {
  return { initialValues: Blogs.selectedComment, comment_uid: Blogs.selectedCommentUid };
};

const formConfig = reduxForm({
  form: 'CommentForm',
  enableReinitialize: true
})(CommentForm);

export default connect(mapStateToProps, { saveComment, updateComment })(withRouter(formConfig));
