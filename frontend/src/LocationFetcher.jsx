
import axios from 'axios';

export const getNearbyUniversities = async (latitude, longitude, radius = 1000) => {
  const apiKey = 'AIzaSyBn31yotA0ODu_sVaT7nSoDu_yePcAJj7c';
  const apiUrl = `/api/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=university&key=${apiKey}`;

  try {
    const response = await axios.get(apiUrl);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching nearby universities:', error);
    return [];
  }
};
