import React from 'react';

function Contact() {
  return (
    <div className="container my-5">
      <h2>Contact Me</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="nameInput" className="form-label">Name</label>
          <input type="text" className="form-control" id="nameInput" />
        </div>
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">Email address</label>
          <input type="email" className="form-control" id="emailInput" />
        </div>
        <div className="mb-3">
          <label htmlFor="messageTextarea" className="form-label">Message</label>
          <textarea className="form-control" id="messageTextarea" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
