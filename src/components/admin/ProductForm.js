import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { saveProduct } from '../../actions';

class ProductForm extends Component {
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
    const { saveProduct } = this.props;

    saveProduct(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="widget center-text">
        <form>
          <Field
            label="Service"
            name="service"
            component={this.renderTextField}
          />
          <Field
            label="Price"
            name="price"
            component={this.renderTextField}
          />
          <Field
            label="Note"
            name="note"
            component={this.renderTextField}
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
  form: 'ProductForm'
})(
  connect(null, { saveProduct })(ProductForm)
);
