import Form from 'react-bootstrap/Form';

const InputFile = () => {
  return (
    <>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>읽은 책을 선택해주세요</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
    </>
  );
};

export default InputFile;
