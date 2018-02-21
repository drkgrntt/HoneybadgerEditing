import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { saveMessage } from '../actions';

class ContactForm extends Component {
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
    const { saveMessage } = this.props;

    saveMessage(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="widget center-text">
        <form>
          <div style={{ display: 'block' }}>
            <Field
              label="Your Name"
              name="name"
              component={this.renderTextField}
            />
            <Field
              label="Your Email"
              name="email"
              component={this.renderTextField}
            />
          </div>
          <Field
            label="How can I help you?"
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

export default reduxForm({
  form: 'ContactForm'
})(
  connect(null, { saveMessage })(ContactForm)
);
