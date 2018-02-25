import React from 'react';
import { Icon } from 'semantic-ui-react';

const FacebookFeed = () => {
  return (
    <div className="widget">
      <h2 className="widget-title">facebook<Icon color="blue" name="facebook" /></h2>
      <div 
        className="fb-page" 
        data-href="https://www.facebook.com/editingbadger/" 
        data-tabs="timeline" 
        data-small-header="true" 
        data-adapt-container-width="true" 
        data-hide-cover="true" 
        data-show-facepile="false"
      >
        <blockquote 
          cite="https://www.facebook.com/editingbadger/" 
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/editingbadger/">
            Honeybadger Editing
          </a>
        </blockquote>
      </div>
    </div>
  );
}

export default FacebookFeed;
