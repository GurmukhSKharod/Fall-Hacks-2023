import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = () => {
  const mapStyles = {
    height: '100vh',
    width: '100%',
  };

  // Default center coordinates
  const defaultCenter = {
    lat: 49.26418225596548, 
    lng: -123.17626888135315
  };

  // State to store user's geolocation
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;

        setUserLocation({ lat: userLat, lng: userLng });
      });
    } else {
      console.log('Geolocation is not available.'); // we can change this log to be an exception thrown instead of output to log. maybe???
    }
  }, []); // Run once when the component mounts

  return (
    <LoadScript googleMapsApiKey='AIzaSyBn31yotA0ODu_sVaT7nSoDu_yePcAJj7c'>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={15}
        center={userLocation || defaultCenter} // Use userLocation if available, else use defaultCenter
      />
    </LoadScript>
  );
};

export default MapContainer;
