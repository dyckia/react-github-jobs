import { Card, Badge, Button, Collapse } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import { useState } from 'react';

export default function Job({job}) {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title>
              {job.title} - <span className="text-muted font-weight-light">
                {job.company}
              </span>
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              {new Date(job.created_at).toLocaleDateString()}
            </Card.Subtitle>
            <Badge variant="secondary" className="mr-2">{job.type}</Badge>
            <Badge variant="secondary" className="mr-2">{job.location}</Badge>
            <div style={{wordBreak: "break-all"}}>
              <ReactMarkdown source={job.how_to_apply} />
            </div>
          </div>
          <img className="d-none d-md-block" height="50" alt={job.company} src={job.company_logo} />
        </div>
        <Card.Text>
          <Button 
            variant="primary" 
            onClick={() => setIsToggled(() => !isToggled)}
          >
            {isToggled ? "Hide Details" : "View Details"}
          </Button>
        </Card.Text>
        <Collapse in={isToggled}>
          <div>
            <ReactMarkdown source={job.description} />
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  )
}