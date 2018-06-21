import React from 'react';
import styled from 'styled-components';
import ContactInfo from '../components/contactinfo';
import ContactForm from '../components/contactform';

const StyledContactPg = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  p {
    color: #333;
  }
`;
const StyledCol1 = styled.div`
  width: 50%;
  @media only screen and (max-width: 768px)  {
    width: 100%;
  }
`;
const StyledCol2 = styled.div`
  width: 40%;
  @media only screen and (max-width: 768px)  {
    margin-top: 1.3em;
    width: 100%;
  }
`;

const Contact = () => (
  <StyledContactPg>
    <StyledCol1>
      <h3>Basic Contact Info</h3>
      <ContactInfo />
    </StyledCol1>
    <StyledCol2>
      <h3>Contact Form</h3>
      <ContactForm />
    </StyledCol2>
  </StyledContactPg>
);

export default Contact;
