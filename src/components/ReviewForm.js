import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { saveReview, updateReview } from '../actions';

class ReviewForm extends Component {
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

  renderTextAreaField(field) {
    return (
      <div>
        <h3>{field.label}</h3>
        <textarea
          rows="10"
          className="text-area-input"
          placeholder={field.label}
          type="textarea"
          {...field.input}
        />
      </div>
    );
  }

  onSubmit(values) {
    const { uid, initialValues, saveReview, updateReview } = this.props;

    if (initialValues) {
      return updateReview(values, uid);
    }

    saveReview(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="center-text">
        <h2 className="section-title">Leave a Review</h2>
        <br />
        <form>
          <Field
            label="Your First Name"
            name="name"
            component={this.renderTextField}
          />
          <Field
            label="Review Title"
            name="title"
            component={this.renderTextField}
          />
          <h3>Rating (in stars)</h3>
          <Field
            name="stars"
            component="select"
            className="select-input"
          >
            <option></option>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
            <option value="0">0</option>
          </Field>
          <Field
            label="Review Content"
            name="content"
            component={this.renderTextAreaField}
          />
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

const mapStateToProps = ({ Reviews }) => {
  return { initialValues: Reviews.reviewFormValues, uid: Reviews.selectedUid };
};

const formConfig = reduxForm({
  form: 'ReviewForm',
  enableReinitialize: true
})(ReviewForm);

export default connect(mapStateToProps, { saveReview, updateReview })(formConfig);
