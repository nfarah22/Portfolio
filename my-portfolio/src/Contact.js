import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        await axios.post('http://localhost:3001/send-email', formData);
        alert('Message sent successfully');
    
    } catch (error) {
        alert('Error sending message');
      
    }
};

  return (
    <div className="container my-5">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nameInput" className="form-label">Name</label>
          <input 
            type="text" 
            className="form-control" 
            id="name" 
            value={formData.name} 
            onChange={handleChange} 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">Email address</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            value={formData.email} 
            onChange={handleChange} 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="messageTextarea" className="form-label">Message</label>
          <textarea 
            className="form-control" 
            id="message" 
            rows="3"
            value={formData.message} 
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
