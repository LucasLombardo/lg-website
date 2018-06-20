import React from 'react';

const ContactSuccess = () => (
  <div>
    <h1> The form was submitted, Thanks! </h1>
    <form name="contact" method="POST" action="/contact-success" data-netlify="true" netlify>
      <p>
        <label>Your Name: <input type="text" name="name" /></label>
      </p>
      <p>
        <label>Your Email: <input type="email" name="email" /></label>
      </p>
      <p>
        <label>Message: <textarea name="message" /></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </div>
);

export default ContactSuccess;
