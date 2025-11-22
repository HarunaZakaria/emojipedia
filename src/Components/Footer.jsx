import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <p>
        <span>Copyright</span>&copy;{currentYear}. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
