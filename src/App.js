import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import Feed from './components/feed/Feed';
import MyPage from './components/MyPage/MyPage';
import Total from './components/Total/Total';
import Record from './components/record/Record';
import { BookProvider } from './components/context/BookContext';
import './App.css';

function App() {
  return (
    <BookProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/total" element={<Total />} />
            <Route path="/record" element={<Record />} />
          </Routes>
        </BrowserRouter>
      </div>
    </BookProvider>
  );
}

export default App;
