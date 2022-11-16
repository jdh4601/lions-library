import React, { useState } from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';

const InfoModal = ({
  title,
  subtitle,
  authors,
  publisher,
  categories,
  thumbnail,
  description,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>More Info</Button>}
    >
      <Modal.Content image>
        <Image size="huge" src={thumbnail} />
        <Modal.Description>
          <Header>
            {title} : {subtitle}
          </Header>
          <span>{description}</span>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button onClick={() => setOpen(false)} positive>
          Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default InfoModal;
