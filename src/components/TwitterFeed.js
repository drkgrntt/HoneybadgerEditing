import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import { Timeline } from 'react-twitter-widgets'

class TwitterFeed extends Component {
  render() {
    return (
      <div className="twitter widget">
        <h2 className="widget-title">twitter<Icon color="blue" name="twitter" /></h2>
        <Timeline
          dataSource={{ sourceType: "profile", screenName:"editingbadger" }}
          options={{ username: "editingbadger", height: "400" }}
        />
      </div>
    );
  }
}

export default TwitterFeed;
