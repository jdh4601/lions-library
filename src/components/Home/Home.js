import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';
import MainBtn from '../UI/MainBtn';

function Home() {
  const navigate = useNavigate();

  const moveToLogin = () => {
    navigate('/login');
  };

  const moveToSignup = () => {
    navigate('/signup');
  };

  return (
    <>
      <div className="home">
        <h1 className="title">사자의 서재</h1>
        <div className="container">
          <div className="box">
            <Link className="label" to="/login">
              <h2>Login</h2>
            </Link>
            <button onClick={moveToLogin}>Login</button>
          </div>
          <div className="box">
            <Link className="label" to="/signup">
              <h2>Sign up</h2>
            </Link>
            <button onClick={moveToSignup}>Signup</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
