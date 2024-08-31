import React from 'react';

function BusinessList({ businesses }) {
  return (
    <div>
      {businesses.map((business) => (
        <div key={business._id}>
          <h2>{business.name}</h2>
          <p>{business.category}</p>
          <p>{business.location}</p>
          <p>{business.description}</p>
        </div>
      ))}
    </div>
  );
}

export default BusinessList;
