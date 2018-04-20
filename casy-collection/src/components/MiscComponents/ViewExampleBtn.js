import React from 'react';

const ViewExampleBtn = props => {
  return (
    <div>
      <h3>
        <a
          style={{
            display: 'inline-block',
            padding: '50px',
            fontSize: 'calc(14px + (25 - 14) * (100vw - 320px) / (960 - 320))'
          }}
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          Example Found Here
        </a>
      </h3>
    </div>
  );
};

export default ViewExampleBtn;
