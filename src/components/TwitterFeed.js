import React from 'react';
import { Icon } from 'semantic-ui-react';

const TwitterFeed = () => {
  return (
    <div className="widget">
      <h2 className="widget-title">twitter<Icon color="blue" name="twitter" /></h2>
      <a 
        className="twitter-timeline" 
        data-width="330" 
        data-height="400" 
        href="https://twitter.com/editingbadger?ref_src=twsrc%5Etfw"
      >
        Tweets by editingbadger
      </a>
    </div>
  );
}

export default TwitterFeed;
