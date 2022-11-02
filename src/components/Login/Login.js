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
    id: 'user1',
    password: '1234',
  },
  {
    id: 'user1',
    password: '1234',
  },
];

// Error messages
const errors = {
  id: 'Invalid Id!',
  password: 'Invalid Password!',
};

function Login() {
  // Store an obj with error messages
  const [errorMessage, setErrorMessage] = useState({});
  // Change boolean value if the form is successfully submitted
  const [isSumitted, setIsSumitted] = useState(false);
  console.log('rendering...');

  // Move sign-up page if the form is submitted
  const navigate = useNavigate();
  const moveSignUp = () => {
    navigate('/signup');
  };

  // Generate error messages
  const RenderErrorMessage = name => {
    name === errorMessage.name && (
      <div className="error">{errorMessage.message}</div>
    );
  };

  const HandleSubmit = event => {
    event.preventDefault();
    // 가장 첫번째 forms 참조하기
    var { id, password } = document.forms[0];

    // Find user login info - 배열 순회
    const userData = database.find(user => user.id === id.value); // true or false

    // Compare user id
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
      <form className="input-box" onSubmit={HandleSubmit}>
        <Input name="ID">{RenderErrorMessage('id')}</Input>
        <Input name="PW">{RenderErrorMessage('password')}</Input>
      </form>
      <NextButton onClick={HandleSubmit} onSubmit={HandleSubmit} />
    </>
  );

  return (
    <div>
      <div className="login-box">
        <div className="login-header">
          <h1>Login</h1>
        </div>
        {isSumitted ? alert('User is successfully logged in!') : RenderForm}
        {isSumitted && moveSignUp}
      </div>
    </div>
  );
}

export default Login;
