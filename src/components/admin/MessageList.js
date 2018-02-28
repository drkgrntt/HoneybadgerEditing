import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { fetchMessages, deleteMessage } from '../../actions';

class MessageList extends Component {
  componentDidMount() {
    this.props.fetchMessages();
  }

  onDeleteClick(Message) {
    this.props.deleteMessage(Message);
  }

  renderMessageList() {
    const { Messages } = this.props;

    if (Messages == false) {
      return (
        <div>
          <hr />
          <h1>No messages!</h1>
          <hr />
        </div>
      );
    }

    return _.map(Messages, (Message) => {
      return [
        <div key={Message.uid}>
          <hr />
          <Button 
            size="small"
            compact
            basic
            content="Delete" 
            onClick={this.onDeleteClick.bind(this, Message)}
            color="red"
            className="admin-button"
          />
          <p><strong>Name</strong>: {Message.name}</p>
          <p><strong>Email</strong>: <a href={`mailto:${Message.email}`}>{Message.email}</a></p>
          <p><strong>Message</strong>: {Message.content}</p>
          <hr />
        </div>
      ];
    });
  }

  render() {
    return (
      <div className="widget"> 
        {this.renderMessageList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const Messages = _.map(state.Messages, (val, uid) => {
    return { ...val, uid };
  });

  return { Messages };
};

export default connect(mapStateToProps, { fetchMessages, deleteMessage })(MessageList);
