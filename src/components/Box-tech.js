import React from 'react';

export default function Box_tech(props) {
  return (
    <div className="BoxTech box">
      <figure className="Icon-container">
        <img src={props.icon} />
      </figure>
    </div>
  );
}
