import React from 'react';

const Contact = () => (
  <div>
    <form name="contact" method="post" action="/contact" data-netlify="true" data-netlify-honeypot="bot-field">
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

export default Contact;
