import React, { useState, useEffect } from 'react';

const ResizeApp = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const isMobile = windowWidth < 768;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth) 
    window.addEventListener('resize', handleResize) 

    return () => {
      window.removeEventListener('resize', handleResize) 
    }
  }, []);

  return (
    <div>
      <h1> {windowWidth} </h1>
      {isMobile &&
        <h2>SHOW ONLY MOBILE DEVICE</h2>
    }
    </div>
  )
}

export default ResizeApp;
