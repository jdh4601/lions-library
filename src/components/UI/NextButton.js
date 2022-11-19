import btnImg from '../../assets/img/Ellipse 8.png';
import arrowImg from '../../assets/img/Arrow 1.png';
import './NextButton.css';

function NextButton(props) {
  return (
    <div className="btn-box">
      <div onClick={props.onClick} onSubmit={props.onSubmit}>
        <img className="circle" src={btnImg} alt="btn-img" />
        <img className="arrow" src={arrowImg} alt="arrow-img" />
      </div>
    </div>
  );
}

export default NextButton;
