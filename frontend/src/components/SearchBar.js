import React, { useState } from "react";
import axios from "axios";
import { Button, Form } from 'react-bootstrap';

function SearchBar({ setBusinesses }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/businesses", {
        params: { search: searchTerm },
      });
      setBusinesses(response.data);
    } catch (err) {
      console.error("Error fetching businesses:", err);
    }
  };

  return (
    <Form>
      <Form.Control
        type="text"
        placeholder="Search for businesses..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Form.Control
        type="text"
        placeholder="Enter location..."
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <Button variant="primary" onClick={handleSearch}>
        Search
      </Button>
    </Form>
  );
}

export default SearchBar;
