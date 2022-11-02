import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import btnImg from '../../assets/img/Ellipse 8.png';
// import Card from '../UI/Card';
import NextButton from '../UI/NextButton';

function Home() {
  return (
    <div className="home">
      <h1 className="title">사자의 서재</h1>
      <div className="container">
        <div className="box">
          <h2>
            <Link className="nav" to="/Login">
              Login
            </Link>
          </h2>
          <img className="btn-bg" src={btnImg} alt="button" />
        </div>
        <div className="box">
          <h2>
            <Link className="nav" to="/SignUp">
              Sign up
            </Link>
          </h2>
          <NextButton />
          {/* <img className="btn-bg" src={btnImg} alt="button" /> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
