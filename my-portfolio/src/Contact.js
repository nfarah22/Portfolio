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
      await axios.post('https://najah-farah.onrender.com/send-email', formData);
      alert('Message sent successfully');
    } catch (error) {
      alert('Error sending message');
    }
  };

  return (
    <section id="contact" className="contact-container">
      <div className="contact-message">
        <h2 className="contact-title">I'm Available for Work!</h2>
        <p>
          Let's connect!<br />
          I'm just a message away. 🚀
        </p>
      </div>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input 
              type="text" 
              className="form-control" 
              id="name" 
              value={formData.name} 
              onChange={handleChange} 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              value={formData.email} 
              onChange={handleChange} 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
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
    </section>
  );
}

export default Contact;
