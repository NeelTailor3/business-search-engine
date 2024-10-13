import React, { useState } from "react";
import axios from "axios";
import { Button, Form } from 'react-bootstrap';

function SearchBar({ setBusinesses }) {
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  const handleSearch = async () => {
    // Validate all fields
    if (!location || !category) {
      alert("Business location and category are required.");
      return;
    }

    try {
      // Send location and category in the query parameters
      const response = await axios.get("http://localhost:3001/api/businesses", {
        params: {
          location: location,
          category: category,
        },
      });
      setBusinesses(response.data); // Business list with the fetched data
    } catch (err) {
      console.error("Error fetching businesses:", err);
      alert("Error fetching businesses. Please try again.");
    }
  };

  return (
    <Form>
      <Form.Group controlId="businessCategory">
        <Form.Control
          type="text"
          placeholder="Enter category..."
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </Form.Group>
      
      <Form.Group controlId="businessLocation">
        <Form.Control
          type="text"
          placeholder="Enter location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" onClick={handleSearch}>
        Search
      </Button>
    </Form>
  );
}

export default SearchBar;
