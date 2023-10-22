
import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { getNearbyUniversities } from './LocationFetcher';

const MapContainer = () => {
  const [universities, setUniversities] = useState([]);
  const [map, setMap] = useState(null);

  const mapStyles = {
    margin: 'auto',
    border: '3px solid green',
    padding: '10px',
    height: '75vh',
    width: '75%',
  };

  const defaultCenter = {
    lat: 49.278667644681704, lng: -122.91962580793054
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
      console.log('Geolocation is not available.');
    }
  }, []); // Run once when the component mounts


  const onLoad = (map) => {
    setMap(map);
  };

  useEffect(() => {
    if (map) {
      const { lat, lng } = map.getCenter();
      getNearbyUniversities(lat(), lng()).then((data) => {
        setUniversities(data);
      });
    }
  }, [map]);

  return (
    <LoadScript googleMapsApiKey={'AIzaSyBn31yotA0ODu_sVaT7nSoDu_yePcAJj7c'}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={14}
        center={userLocation || defaultCenter} // Use userLocation if available, else use defaultCenter
        onLoad={onLoad}
      >
        {universities.map((university) => (
          <Marker
            key={university.place_id}
            position={{
              lat: university.geometry.location.lat,
              lng: university.geometry.location.lng,
            }}
            title={university.name}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
