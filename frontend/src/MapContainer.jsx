
import React, {useState, useEffect} from 'react';
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

  // Default center coordinates
  const defaultCenter = {
    lat: 49.28165382092186,
    lng: -123.91645297724942,
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
    <LoadScript googleMapsApiKey='AIzaSyBn31yotA0ODu_sVaT7nSoDu_yePcAJj7c'>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={15}
        center={userLocation || defaultCenter}
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
