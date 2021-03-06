import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { saveProduct, updateProduct } from '../../actions';

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
    const { uid, initialValues, saveProduct, updateProduct } = this.props;

    if (initialValues) {
      return updateProduct(values, uid);
    }

    return saveProduct(values);
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
          <p>(To leave any blank, enter one space)</p>
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

const mapStateToProps = ({ Products }) => {
  return { initialValues: Products.productFormValues, uid: Products.selectedUid };
};

const formConfig = reduxForm({
  form: 'ProductForm',
  enableReinitialize: true
})(ProductForm);

export default connect(mapStateToProps, { saveProduct, updateProduct })(formConfig);
