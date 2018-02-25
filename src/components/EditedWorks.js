import React from 'react';

const EditedWorks = () => {
  return (
    <div className="widget">
      <div>
        <h3 className="widget-title">Desert Rain</h3>
        <img 
          width="30%"
          className="image" 
          src="https://images-na.ssl-images-amazon.com/images/I/51WQuCwd1wL.jpg" 
        />
        <a
          href="https://www.amazon.com/Desert-Rain-Book-Caravana-Kersey-ebook/dp/B071DQJN7K/ref=sr_1_1?ie=UTF8&qid=1519573959&sr=8-1&keywords=caravana+kersey&dpID=51WQuCwd1wL&preST=_SY445_QL70_&dpSrc=srch"
        >
          On Amazon
        </a>
      </div>
      <br /><hr /><br />
      <div>
        <h3 className="widget-title">From Scattered Ashes</h3>
        <img
          width="30%"
          className="image"
          src="https://images-na.ssl-images-amazon.com/images/I/51wLkRKQxhL._SX331_BO1,204,203,200_.jpg"
        />
        <a
          href="https://www.amazon.com/Scattered-Ashes-Mark-Garnett/dp/1978355076/ref=sr_1_3?ie=UTF8&qid=1519574530&sr=8-3&keywords=mark+garnett"
        >
          On Amazon
        </a>
      </div>
    </div>
  );
}

export default EditedWorks;
