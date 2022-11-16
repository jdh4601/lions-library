import React from 'react';
import { Loader } from 'semantic-ui-react';

const TextLoader = () => {
  return (
    <Loader active inline>
      <h3>Loading...</h3>
    </Loader>
  );
};

export default TextLoader;
