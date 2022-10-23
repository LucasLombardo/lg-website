import React from 'react'

const Map = () => (
  <iframe
    title="Google Maps Locationxs"
    width="100%"
    height="300"
    style={{ border: 0, padding: 0, margin: 0 }}
    loading="lazy"
    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyB788qDv6haJe-EMkwnz4C_tNRzr0mCWxg&q=1175+Turnpike+St,+North+Andover,+MA+01845`}
    allowfullscreen
  ></iframe>
)

export default Map
