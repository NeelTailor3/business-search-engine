import React from 'react';
import { Card } from 'react-bootstrap';

function BusinessList({ businesses }) {
  return (
    <div className="business-list-container">
      {businesses.map((business, index) => (
        <Card
          key={index}
          className={`business-card ${business.type === 'prime' ? 'prime-business-card' : ''}`}
        >
          <Card.Body>
            <Card.Title className="business-name">{business.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted business-location">
              Location: {business.location}
            </Card.Subtitle>
            <Card.Text className="business-description">
              {business.description}
            </Card.Text>
            <Card.Text className="business-email">
              Email: {business.email}
            </Card.Text>
            <Card.Text className="business-address">
              Address: {business.address}
            </Card.Text>
            <Card.Text className="business-type">
              Business Type: {business.type}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default BusinessList;