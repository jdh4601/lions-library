import './Input.css';
import React from 'react';

function Input(props) {
  return (
    <div className="align-box">
      <div className="input-container">
        <label>{props.name}</label>
        <input type="text" placeholder="  Enter your password" required />
      </div>
    </div>
  );
}

export default Input;
