import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { Grid, Button } from 'semantic-ui-react';
import { loginUser } from '../actions';

class Login extends Component {
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
    const { loginUser, history } = this.props;

    loginUser(values, history);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <Grid>
        <Grid.Column width={4} />
        <Grid.Column width={8}>
          <div className="widget center-text">
            <h2 className="widget-title">Login here or create an account <Link to="/register">here</Link>!</h2>
            <form>
              <Field
                label="Your email address"
                name="email"
                component={this.renderTextField}
              />
              <Field
                label="Your password"
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
            <p className="auth-fail">{this.props.Auth.error}</p>
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
  form: 'LoginForm'
})(
  connect(mapStateToProps, { loginUser })(withRouter(Login))
);
