import './MyPage.css';
import Card from '../UI/Card';
import BottomBtn from '../UI/BottomBtn';
import InputFile from './InputFile';

function MyPage() {
  return (
    <>
      <Card>
        <div className="header">
          <h1>내가 작성한 도서</h1>
        </div>
        <div className="body">
          <InputFile />
          <BottomBtn />
        </div>
      </Card>
    </>
  );
}

export default MyPage;
