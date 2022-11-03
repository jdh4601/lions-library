import btnImg from '../../assets/img/Ellipse 8.png';
import arrowImg from '../../assets/img/Arrow 1.png';
import './MainBtn.css';

function MainBtn(props) {
  return (
    <div className="btn-box">
      <button onClick={props.onClick}>
        <img className="circle" src={btnImg} alt="btn-img" />
        <img className="arrow" src={arrowImg} alt="arrow-img" />
      </button>
    </div>
  );
}

export default MainBtn;
