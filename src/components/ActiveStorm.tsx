import React from 'react';
import { Card } from 'react-bootstrap';

function ActiveStorm({storm} :any) {
  return (
    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{ storm.name }</Card.Title>
            <Card.Text>
            Level { storm.level } will make arrive at { storm.dateFrom } <br/>
            Location <br/>
            <span> { storm.location.city }, { storm.location.state }</span>
            </Card.Text>
        </Card.Body>
    </Card>
  );
}

export default ActiveStorm;
