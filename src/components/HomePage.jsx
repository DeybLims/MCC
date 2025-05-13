import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to MSL Philippines</h1>
      <p>This is the homepage component.</p>
      <div style={{ marginTop: '20px' }}>
        <Link to="/mccmain" style={{ marginRight: '10px', color: '#FFB800' }}>
          MCCMAIN
        </Link>
        <Link to="/mcccalendarfinal" style={{ color: '#FFB800' }}>
          MCCCALENDARFINAL
        </Link>
      </div>
    </div>
  );
};

export default HomePage; 