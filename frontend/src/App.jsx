import React from 'react'
import {Routes,Route} from 'react-router-dom';
import MapContainer from './MapContainer';

const App = () => {
  return (
      <div className="App">
          <div className=' text-white text-6xl'>Universities Near You</div>
          <div className=' text-white'>Welcome the Universities Near You Application. Listed below is your current location, along with any univeristies and facilities near you.</div>
        <MapContainer />
      </div>
  )
}

export default App