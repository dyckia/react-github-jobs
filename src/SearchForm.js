import { Form, Col } from 'react-bootstrap';

export default function SearchForm({params, onParamChange}) {
  return (
    <Form className="mb-4">
      <Form.Row className="align-items-end">
        <Form.Group as={Col}>
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" name="description" value={params.description || ''} 
                        onChange={onParamChange} />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" name="location" value={params.location || ''}
            onChange={onParamChange} />
        </Form.Group>
        <Form.Group as={Col} xs="auto" className="ml-2">
          <Form.Check type="checkbox" label="Only Full Time" value={params.full_time}
                      name="full_time" id="full-time" onChange={onParamChange} 
                      className="mb-2" />
        </Form.Group>
      </Form.Row>
    </Form>
  );
}