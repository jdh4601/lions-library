import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import MainBtn from '../UI/MainBtn';
// import Card from '../UI/Card';

const slideBar = event => {
  console.log(event.target);
};

function Home() {
  return (
    <div className="home">
      <h1 className="title">사자의 서재</h1>
      <div className="container">
        <div className="box">
          <Link className="nav" to="/login">
            <h2>Login</h2>
          </Link>
          <Link to="/login">
            <MainBtn className="login-btn" onClick={slideBar} />
          </Link>
        </div>
        <div className="box">
          <Link className="nav" to="/SignUp">
            <h2>Sign up</h2>
          </Link>
          <Link to="/signup">
            <MainBtn className="signup-btn" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
