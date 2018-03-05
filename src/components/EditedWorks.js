import React from 'react';
import { Grid } from 'semantic-ui-react';

const EditedWorks = () => {
  return (
    <div className="widget">
      <Grid stackable>
        <br />
        <h2 className="widget-title">Desert Rain</h2>
        <Grid.Row style={{ borderBottom: '1px solid #eaeaea' }}>
          <Grid.Column width={5}>
            <img 
              className="image" 
              src="https://images-na.ssl-images-amazon.com/images/I/51WQuCwd1wL.jpg" 
            />
          </Grid.Column>
          <Grid.Column width={11}>
            <div className="quote">
              <p className="text"><em>"El is an amazing editor who cares about your work. She edited my first novel which is now published on Amazon. I would not have been able to do this without her skill and passion. Thanks to her I published a book of amazing quality. If you're looking for an editor don't hesitate to check Honeybadger Editing out!"</em></p>
              <p className="text">-Caravana Kersey, Author</p>
              <hr />
              <h3><a
                href="https://www.amazon.com/Desert-Rain-Book-Caravana-Kersey-ebook/dp/B071DQJN7K/ref=sr_1_1?ie=UTF8&qid=1519573959&sr=8-1&keywords=caravana+kersey&dpID=51WQuCwd1wL&preST=_SY445_QL70_&dpSrc=srch"
              >
                Desert Rain on Amazon
              </a></h3>
            </div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <h2 className="widget-title">From Scattered Ashes</h2>
          <Grid.Column width={5}>
            <img
              className="image"
              src="https://images-na.ssl-images-amazon.com/images/I/51wLkRKQxhL._SX331_BO1,204,203,200_.jpg"
            />
          </Grid.Column>
          <Grid.Column width={11}>
            <div className="quote">
              <p className="text"><em>"For literally all of your writing endeavors (books, essays, short stories, papers for school, resumes, letters to the President, anonymous love letters, etc.), I cannot recommend Honeybadger Editing services highly enough. Professional work at a personal level with affordable prices."</em></p>
              <p className="text">-Mark Garnett, Author</p>
              <hr />
              <h3><a
                href="https://www.amazon.com/Scattered-Ashes-Mark-Garnett/dp/1978355076/ref=sr_1_3?ie=UTF8&qid=1519574530&sr=8-3&keywords=mark+garnett"
              >
                From Scattered Ashes on Amazon
              </a></h3>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default EditedWorks;
