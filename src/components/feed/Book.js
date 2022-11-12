import { Link } from 'react-router-dom';
import './Book.css';

const Book = ({ id, coverImg, title }) => {
  return (
    <div className="book_container">
      <img src={coverImg} />
      <Link to={`/movie/${id}`}>{title}</Link>
    </div>
  );
};

export default Book;
