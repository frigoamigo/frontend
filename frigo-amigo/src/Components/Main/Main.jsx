import React, { useState, useEffect } from 'react';
import Greet from './Desktop/Greet';
import GreetMobile from './Mobile/GreetMobile';
import bg from '../../Pictures/mainbg.png';

const Main = React.forwardRef((props, ref) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 479);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="main">
      <div className="container">
        <img ref={ref} className="main_bg" alt="bg" src={bg}></img>
        {isMobile ? <GreetMobile /> : <Greet />}
      </div>
    </div>
  );
});

export default Main;
