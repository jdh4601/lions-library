import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BottomBtn.css';

const BottomBtn = () => {
  const navigate = useNavigate();

  const moveToFeed = () => {
    navigate('/feed');
  };

  const moveToMy = () => {
    navigate('/my');
  };

  const moveToRecord = () => {
    navigate('/record');
  };

  return (
    <div className="btn_box">
      <button className="total-btn">Total</button>
      <div className="btns">
        <button onClick={moveToFeed} className="popular clicked">
          인기
        </button>
        <button onClick={moveToMy} className="profile">
          My
        </button>
        <button onClick={moveToRecord} className="record">
          기록
        </button>
      </div>
    </div>
  );
};

export default BottomBtn;
