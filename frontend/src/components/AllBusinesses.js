import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AllBusinesses() {
  const [allBusinesses, setAllBusinesses] = useState([]);

  useEffect(() => {
    const fetchAllBusinesses = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/businesses");
        setAllBusinesses(response.data);
      } catch (error) {
        console.error("Error fetching all businesses:", error);
      }
    };

    fetchAllBusinesses();
  }, []);

  return (
    <div className="all-businesses">
      <h4>All Businesses</h4>
      <ul>
        {allBusinesses.map((business) => (
          <li key={business._id}>{business.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default AllBusinesses;
