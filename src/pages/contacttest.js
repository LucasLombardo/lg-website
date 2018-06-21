import React from 'react';

const ContactTest = () => (
  <div>
    <h1>Contact</h1>
    <form
      name="contact-test"
      method="post"
      action="/thanks/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact-test" />
      <p hidden>
        <label htmlFor="bot-field">
        Don’t fill this out:{' '}
          <input name="bot-field" />
        </label>
      </p>
      <p>
        <label htmlFor="name">
        Your name:<br />
          <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label htmlFor="email">
        Your email:<br />
          <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label htmlFor="message">
        Message:<br />
          <textarea name="message" />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </div>
);

export default ContactTest;

