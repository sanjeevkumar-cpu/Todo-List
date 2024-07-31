import React from 'react';

export const Footer = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
    <footer className="text-center text-white mt-auto" style={{ backgroundColor: '#0a4275' }}>
      <div className="p-4 pb-0"></div>
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:
        <a className="text-white" href="#"> Sanjeev Kumar</a>
      </div>
    </footer>
  </div>
  );
};
