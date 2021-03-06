import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import renderHTML from 'react-render-html';
import { connect } from 'react-redux';
import { fetchEditedWorks, deleteEditedWork, fetchEditedWork } from '../actions';

class EditedWorks extends Component {
  componentDidMount() {
    this.props.fetchEditedWorks();
  }

  onDeleteClick(Work) {
    this.props.deleteEditedWork(Work);
  }

  onEditClick(Work) {
    this.props.fetchEditedWork(Work);
  }

  renderAdminButtons(Work) {
    const { Auth } = this.props;

    if (Auth.user.isAdmin) {
      return (
        <div>
          <Link to="/admin/dashboard">
            <Button
              compact
              basic
              content="Edit"
              onClick={this.onEditClick.bind(this, Work)}
              color="orange"
              className="admin-button"
            />
          </Link>
          <Button 
            compact
            basic
            content="Delete" 
            onClick={this.onDeleteClick.bind(this, Work)}
            color="red"
            className="admin-button"
          />
        </div>
      );
    }    
  }

  renderEditedWork() {
    return _.map(_.takeRight(this.props.EditedWorks, 2), (Work) => {
      if (Work.title === undefined) {
        return (
          <h4>Loading . . .</h4>
        );
      }

      return (
        <div key={Work.uid}>
          <br />
          <h2 className="widget-title">{Work.title}</h2>
          <h4 className="text no-space">By {Work.author}</h4>
          <Grid stackable>
            <Grid.Row style={{ borderBottom: '1px solid #eaeaea' }}>
              <Grid.Column width={5}>
                <img 
                  className="image" 
                  src={Work.image} 
                />
              </Grid.Column>
              <Grid.Column width={11}>
                <div className="quote">
                  <p className="text">{renderHTML(Work.description)}</p>
                  <hr />
                  <h3><a
                    href={Work.amazon}
                  >
                    {Work.title} on Amazon
                  </a></h3>
                </div>
                {this.renderAdminButtons(Work)}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      );
    }).reverse();
  }

  render() {
    return (
      <div className="widget">
        <Grid stackable>
          {this.renderEditedWork()}
        </Grid>
        <br /><br />
        <Link to="/works">
          <Button compact basic color="black">
            See More
          </Button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const EditedWorks = _.map(state.EditedWorks, (val, uid) => {
    return { ...val, uid };
  });

  return { EditedWorks, Auth: state.Auth };
};

export default connect(mapStateToProps, { fetchEditedWorks, deleteEditedWork, fetchEditedWork })(EditedWorks);
