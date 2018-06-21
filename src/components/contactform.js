import React from 'react';
import { navigateTo } from 'gatsby-link';
import styled from 'styled-components';

const StyledContactForm = styled.div`
  form {
    width: 90%
    margin: 0 auto;
    padding: 1em 2em;
    border: 1px solid #bbb;
    -moz-box-shadow: 1px 1px 5px #999;
    -webkit-box-shadow: 1px 1px 5px #999;
    box-shadow: 1px 1px 5px #999;
    p {
      text-align: left;
    }
    input {
      width: 100%;
      margin: 0.3em 0;
    }
    textarea {
      width: 100%;
      height: 230px;
      margin: 0.3em 0 0 0;
      resize: none;
    }
    #submitbtn {
      text-align: center;
      margin: 0 0 .4em 0;
    }
  }
`;

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigateTo(form.getAttribute('action')))
      .catch(error => console.log(error));
  };

  render() {
    return (
      <StyledContactForm>
        <form
          name="contact-us"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label htmlFor="bot-field">
              Don’t fill this out:{' '}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label htmlFor="name">
              <strong>Your name:</strong><br />
              <input type="text" name="name" placeholder="John Smith" onChange={this.handleChange} required />
            </label>
          </p>
          <p>
            <label htmlFor="email">
              <strong>Your email:</strong><br />
              <input type="email" name="email" placeholder="jsmith@gmail.com" onChange={this.handleChange} required />
            </label>
          </p>
          <p>
            <label htmlFor="message">
              <strong>Message:</strong><br />
              <textarea name="message" placeholder="Hello" onChange={this.handleChange} required />
            </label>
          </p>
          <p id="submitbtn" >
            <button type="submit">Send</button>
          </p>
        </form>
      </StyledContactForm>
    );
  }
}
