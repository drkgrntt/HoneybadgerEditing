import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Grid } from 'semantic-ui-react';
import TextEditor from '../TextEditor';
import { fetchAbout, updateAbout } from '../../actions';

class AboutForm extends Component {
  componentDidMount() {
    this.props.fetchAbout();
  }

  onSubmit(values) {
    const { updateAbout, history } = this.props;

    updateAbout(values, history);
  }

  render() {
    const { handleSubmit, Auth } = this.props;

    if (!Auth.user.isAdmin) {
      return (
        <div className="center-text">
          <h1>You must be an admin to see this.</h1>
          <Link to="/login"><h2>Login</h2></Link>
        </div>
      );
    }

    return (
      <Grid>
        <Grid.Column width={3} />
        <Grid.Column style={{ marginTop: '40px' }} className="widget center-text" width={10}>
          <form>
            <h3>About Content</h3>
            <Field
              name="about"
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
        </Grid.Column>
        <Grid.Column width={3} />
      </Grid>
    );
  }
}

const mapStateToProps = ({ About, Auth }) => {
  return { initialValues: About, Auth };
};

const formConfig = reduxForm({
  form: 'AboutForm',
  enableReinitialize: true
})(AboutForm);

export default connect(mapStateToProps, { fetchAbout, updateAbout })(withRouter(formConfig));
