import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import TextEditor from '../TextEditor';
import { saveEditedWork, updateEditedWork } from '../../actions';

class EditedWorkForm extends Component {
  componentDidMount() {
    if (this.props.initialValues) {
      window.scrollTo(0, 600);
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
    const { initialValues, saveEditedWork, updateEditedWork, uid, history } = this.props;

    if (initialValues) {
      return updateEditedWork(values, uid, history);
    }

    return saveEditedWork(values, history);
  }

  render() {
    console.log(this.props.initialValues);
    const { handleSubmit } = this.props;

    return (
      <div className="widget center-text">
        <form>
          <Field
            label="Title"
            name="title"
            component={this.renderTextField}
          />
          <Field
            label="Author"
            name="author"
            component={this.renderTextField}
          />
          <Field
            label="Image URL"
            name="image"
            component={this.renderTextField}
          />
          <Field
            label="Amazon URL"
            name="amazon"
            component={this.renderTextField}
          />
          <h3>Book Summary</h3>
          <Field
            name="description"
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

const mapStateToProps = ({ EditedWorks }) => {
  return { initialValues: EditedWorks.editedWorkFormValues, uid: EditedWorks.selectedUid };
};

const formConfig = reduxForm({
  form: 'EditedWorkForm',
  enableReinitialize: true
})(EditedWorkForm);

export default connect(mapStateToProps, { saveEditedWork, updateEditedWork })(withRouter(formConfig));
