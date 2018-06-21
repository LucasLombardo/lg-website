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
      onSubmit={this.handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact-test" />
      <p hidden>
        <label htmlFor="bot-field">
        Don’t fill this out:{' '}
          <input name="bot-field" onChange={this.handleChange} />
        </label>
      </p>
      <p>
        <label htmlFor="name">
        Your name:<br />
          <input type="text" name="name" onChange={this.handleChange} />
        </label>
      </p>
      <p>
        <label htmlFor="email">
        Your email:<br />
          <input type="email" name="email" onChange={this.handleChange} />
        </label>
      </p>
      <p>
        <label htmlFor="message">
        Message:<br />
          <textarea name="message" onChange={this.handleChange} />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </div>
);

export default ContactTest;

