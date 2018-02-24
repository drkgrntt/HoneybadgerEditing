import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { Grid, Button } from 'semantic-ui-react';
import { registerUser } from '../actions';

class Register extends Component {
  renderTextField(field) {
    return (
      <div>
        <h3>{field.label}</h3>
        <input
          placeholder={field.name}
          type="text"
          className="text-input"
          {...field.input}
        />
      </div>
    );
  }

  renderPasswordField(field) {
    return (
      <div>
        <h3>{field.label}</h3>
        <input
          placeholder={field.name}
          type="password"
          className="text-input"
          {...field.input}
        />
      </div>
    );
  }

  onSubmit(values) {
    const { registerUser, history } = this.props;

    registerUser(values, history);
  }

  render() {
    const { handleSubmit, Auth } = this.props;

    return (
      <Grid>
        <Grid.Column width={4} />
        <Grid.Column width={8}>
          <div className="widget center-text">
            <h2 className="widget-title">Register here or login <Link to="/login">here</Link>!</h2>
            <form>
              <Field
                label="Pick a username"
                name="username"
                component={this.renderTextField}
              />
              <Field
                label="Your email address"
                name="email"
                component={this.renderTextField}
              />
              <Field
                label="Set a password"
                name="password"
                component={this.renderPasswordField}
              />
              <Button
                onClick={handleSubmit(this.onSubmit.bind(this))}
                basic
                color="black"
              >
                Submit
              </Button>
            </form>
            <p className="auth-fail">{Auth.error}</p>
          </div>
        </Grid.Column>
        <Grid.Column width={4} />
      </Grid>
    );
  }
}

const mapStateToProps = ({ Auth }) => {
  return { Auth };
};

export default reduxForm({
  form: 'RegisterForm'
})(
  connect(mapStateToProps, { registerUser })(withRouter(Register))
);
