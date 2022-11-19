import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import NextButton from '../UI/NextButton';
import Input from '../UI/Input';

const database = [
  {
    id: 'user1',
    password: '1234',
  },
  {
    id: 'user2',
    password: '1234',
  },
  {
    id: 'user3',
    password: '1234',
  },
];

// Error messages
const errors = {
  id: 'Invalid Id!',
  password: 'Invalid Password!',
};

function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState({});
  const [isSumitted, setIsSumitted] = useState(false);

  const navigate = useNavigate();

  const moveToSignUp = () => {
    navigate('/signup');
  };

  const moveToFeed = () => {
    navigate('/feed');
  };

  // Generate error messages
  const RenderErrorMessage = name => {
    name === errorMessage.name && (
      <div className="error">{errorMessage.message}</div>
    );
  };

  const handleSubmit = event => {
    event.preventDefault();
    setId('');
    setPassword('');
    var id = event.target.ID;
    var password = event.target.PW;
    moveToFeed();
    // Find user login info
    const userData = database.find(user => user.id === id.value);
    console.log(userData); // true or false

    if (userData) {
      // Check user password
      if (userData.password !== password.value) {
        // Invalid messages
        setErrorMessage({
          name: 'password',
          message: errors.password,
        });
      } else {
        setIsSumitted(true);
      }
    } else {
      // Id not found
      setErrorMessage({
        name: 'id',
        message: errors.id,
      });
    }
  };

  const RenderForm = (
    <>
      <form className="input-box" onSubmit={handleSubmit}>
        <Input value={id} name="ID" onChange={e => setId(e.target.value)} />
        {RenderErrorMessage('id')}
        <Input
          value={password}
          name="PW"
          onChange={e => setPassword(e.target.value)}
        />
        {RenderErrorMessage('password')}
        <p className="signup">
          Don't have an account?{' '}
          <span className="link" onClick={moveToSignUp}>
            Sign up
          </span>
        </p>
        <NextButton onClick={handleSubmit} />
      </form>
    </>
  );

  return (
    <div>
      <div className="login-box">
        <div className="login-header">
          <h1>Login</h1>
        </div>
        {isSumitted ? alert('User is successfully logged in!') : RenderForm}
      </div>
    </div>
  );
}

export default Login;
