import React from 'react';
import MostSearched from './MostSearched';
import AllBusinesses from './AllBusinesses';

function Sidebar() {
  return (
    <div className="sidebar">
      <MostSearched />
      <AllBusinesses />
    </div>
  );
}

export default Sidebar;
