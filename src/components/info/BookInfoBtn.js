import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import InfoModal from '../UI/InfoModal';

const BookInfoBtn = ({
  title,
  subtitle,
  authors,
  publisher,
  categories,
  thumbnail,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const onClickHandler = () => {
    setIsClicked(true);
  };

  return (
    <>
      {/* <Button onClick={onClickHandler} content="Primary" primary /> */}
      {/* {isClicked && <InfoModal />} */}
      <InfoModal />
    </>
  );
};

export default BookInfoBtn;
