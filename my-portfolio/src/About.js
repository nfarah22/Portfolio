
import React from 'react';
import Background from './Background'; 


const HomePage = () => {
  return (
    <div className="homepage">
      <Background /> 
      <div className="intro">
        <h1>Welcome to My Portfolio</h1>
        <p>Hi, I'm Najah. I'm a web developer with a passion
             for creating amazing websites.</p>
      </div>

    </div>
  );
}

export default HomePage;
