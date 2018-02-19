import React from 'react';
import { Icon } from 'semantic-ui-react';

const FacebookFeed = () => {
  return (
    <div className="facebook widget">
      <h2 className="widget-title">facebook<Icon inverted name="facebook" /></h2>
      <iframe 
        title="Facebook"
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Feditingbadger%2F&tabs=timeline&width=300&height=400&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId" 
        width="300" 
        height="400" 
        style={{ border: 'none', overflow: 'hidden' }} 
        scrolling="no" 
        frameborder="0" 
        allowTransparency="true"
      />
    </div>
  );
}

export default FacebookFeed;
