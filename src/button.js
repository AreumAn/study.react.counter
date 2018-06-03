import React from 'react';

const Button = (props) => {
    return (<div className="Buttons">
    <div className="btn add" onClick={props.onCreate}>
      Create
    </div>
    <div className="btn remove" onClick={props.onDelete}>
      Remove
    </div>
  </div>);
}

export default Button;

