import './Input.css';
import React from 'react';

function Input(props) {
  return (
    <div className="align-box">
      <div className="input-container">
        <label>{props.name}</label>
        <input
          type="text"
          value={props.value}
          name={props.name}
          placeholder={`   Enter your ${props.name}`}
          onChange={props.onChange}
          required
        />
      </div>
    </div>
  );
}

export default Input;
