import React from 'react';

function Portfolio() {
  return (
    <div className="container my-5">
      <h2>My Portfolio</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">HireMe</h5>
              <iframe 
                src="https://cyf-glasgow-06-final-project-team-4.netlify.app/" 
                title="CYF Glasgow Project" 
                width="100%" 
                height="200px"
                style={{ border: 'none' }}
              ></iframe>
              <p className="card-text"> HireMe is a platform that simplifies job hunting
               for CYF graduates and empowers employers to find fresh talent easily,
               all while supporting effective mentorship for CYF volunteers .
               </p>
            </div>
          </div>
        </div>

        {/* Najah's Project */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">YouTube saver</h5>
              <iframe 
                src="https://najahsproject.onrender.com" 
                title="Najah's Project" 
                width="100%" 
                height="200px"
                style={{ border: 'none' }}
              ></iframe>
              <p className="card-text"> A platform allowing users to explore, post, delete, watch,
               'Up Vote,' and 'Down Vote' YouTube videos, making it an interactive and engaging experience.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
