import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

/* eslint-disable */
const MapWithAMarker = withScriptjs(withGoogleMap(props => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 42.650402, lng: -71.096469 }}
  >
    <Marker
      position={{ lat: 42.650402, lng: -71.096469 }}
    />
  </GoogleMap>),
));

export default MapWithAMarker;
