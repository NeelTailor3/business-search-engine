import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import BusinessList from '../components/BusinessList';

function Home() {
  const [businesses, setBusinesses] = useState([]);

  return (
    <div>
      <SearchBar setBusinesses={setBusinesses} />
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default Home;
