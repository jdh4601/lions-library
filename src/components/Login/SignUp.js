import './Login.css';
import NextButton from '../UI/NextButton';
import Input from '../UI/Input';

function SignUp() {
  const signUpBtn = event => {
    console.log(event.target);
  };

  return (
    <div>
      <div className="login-box">
        <div className="login-header">
          <h1>Sign up</h1>
        </div>
        <form className="input-box">
          <Input name="ID" />
          <Input name="PW" />
          <Input name="PW" />
        </form>
        <NextButton onClick={signUpBtn} />
      </div>
    </div>
  );
}

export default SignUp;
