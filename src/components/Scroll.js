import React from 'react';
import './Scroll.css';

const Scroll = (props) => {
  return (
    <div>
      <div className='desktop' style={{ overflowY: 'scroll', height: 'calc(100vh - 187.32px)'}}>
        {props.children}
      </div>
      <div className='mobile' style={{ overflowY: 'scroll', height: 'calc(100vh - 157.24px)'}}>
      {props.children}
      </div>
    </div>
  );
};

export default Scroll;