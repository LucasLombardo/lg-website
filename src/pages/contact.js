import React from 'react';
import styled from 'styled-components';
import ContactInfo from '../components/contactinfo';

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

const Contact = () => (
  <StyledContactPg>
    <StyledCol1>
      <h3>Basic Contact Info</h3>
      <ContactInfo />
    </StyledCol1>
  </StyledContactPg>
);

export default Contact;
