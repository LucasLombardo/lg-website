import React from 'react';
import styled from 'styled-components';
import MapWithAMarker from '../components/map';

const StyledContactDiv = styled.div`
    p {
        text-align: left;
        margin: .5rem 0;
        line-height: 1.3em;
    }
    a {
        color: #333;
    }
    .black-border {
      border: 1px solid #111;
    }
`;

const ContactInfo = () => (
  <StyledContactDiv>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <p><i className="fa fa-phone" /><strong>   Phone: </strong><a href="tel:1-978-688-1230">978-688-1230</a></p>
    <p><i className="fa fa-fax" /><strong>   Fax: </strong>978-688-0188</p>
    <p><i className="fa fa-envelope" /><strong>   Email: </strong><a href="mailto:lombardo_graphics@verizon.net">lombardo_graphics@verizon.net</a></p>
    <p><strong>Shop address (by appointment only) : </strong></p>
    <p>1175 Turnpike Street North Andover, MA 01845</p>
    <div className="black-border">
      <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC3mhE1yT1aaaiLzBJ1tX5xpGMEOSXwd5o&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '300px' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
    <p><strong>Mailing address: </strong></p>
    <p>1044 Johnson Street North Andover, MA 01845</p>
  </StyledContactDiv>
);

export default ContactInfo;
