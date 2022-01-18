import React from 'react'
import styled from 'styled-components'
import Map from '../components/map'

const StyledContactDiv = styled.div`
  p {
    text-align: left;
    margin: 0.5rem 0;
    line-height: 1.3em;
  }
  a {
    color: #333;
  }
  .black-border {
    border: 1px solid #111;
    height: 302px;
  }
`

const ContactInfo = () => (
  <StyledContactDiv>
    <p>
      <strong>Phone: </strong>
      <a href="tel:1-978-688-1230">978-688-1230</a>
    </p>
    <p>
      <strong>Fax: </strong>978-688-0188
    </p>
    <p>
      <strong>Email: </strong>
      <a href="mailto:lombardo_graphics@verizon.net">
        lombardo_graphics@verizon.net
      </a>
    </p>
    <p>
      <strong>Shop address (by appointment only) : </strong>
    </p>
    <p>1175 Turnpike Street North Andover, MA 01845</p>
    <div className="black-border">
      <Map />
    </div>
    <p>
      <strong>Mailing address: </strong>
    </p>
    <p>1044 Johnson Street North Andover, MA 01845</p>
  </StyledContactDiv>
)

export default ContactInfo
