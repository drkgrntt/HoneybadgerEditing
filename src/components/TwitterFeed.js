import React from 'react';
import { Icon } from 'semantic-ui-react';

const TwitterFeed = () => {
  return (
    <div className="twitter widget">
      <h2 className="widget-title">twitter<Icon inverted name="twitter" /></h2>
      <a 
        className="twitter-timeline" 
        width="300" 
        height="400" 
        data-theme="light" 
        href="https://twitter.com/editingbadger?ref_src=twsrc%5Etfw"
      >
        Tweets by editingbadger
      </a>
    </div>
  );
}

export default TwitterFeed;
