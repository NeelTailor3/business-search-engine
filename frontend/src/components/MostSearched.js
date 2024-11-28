import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MostSearched() {
  const [mostSearchedBusinesses, setMostSearchedBusinesses] = useState([]);

  useEffect(() => {
    const fetchMostSearched = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/businesses/most-searched');
        setMostSearchedBusinesses(response.data);
      } catch (error) {
        console.error("Error fetching most searched businesses:", error);
      }
    };
  
    fetchMostSearched();
  }, []);

  return (
    <div className="most-searched">
      <h4>Most Searched Businesses</h4>
      <ul>
        {mostSearchedBusinesses.map((business) => (
          <li key={business._id}>{business.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MostSearched;
