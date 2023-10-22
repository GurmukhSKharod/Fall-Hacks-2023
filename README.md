Fall Hacks 2023
-----------------------------------------------------------------------------------------------------------------------------------------
Gurmukh Kharod      301383004                  gsk13@sfu.ca  
Iqbal Mathamu       Non-SFU Student            Iqbalsmatharu@hotmail.com
------------------------------------------------------------------------------------------------------------------------------------------
1. Project description, how does it tie in to the theme?

This project shows all nearby universities to the users current location, and is displayed using the Google Maps API on a Google Maps Display.

This project implements the Google Maps API within A Full Stack MERN App.
The MERN app uses MongoDb with mongoose, express.js, React.js, and Node.js.

Back-End:
Simply implements a MongoDB Database and calls mongoose.connect() to use the DB.
Using Node.js to utlize node modules.
Node modules are used to allow express functions such as request/respose.
A config.js file holds all ports and URLs.

Front-End:
React was mainly used as the front end language.
Axios was used to make HTTP requests for the Google Maps API.
Vite and was used on the front-end to setup the app and its packages.

Overview: 

This app starts by running the backend server. Then the frontend server. This can be done in the terminal with "npm run dev".
Once the servers are running, we can click on the given frontend server link to run the app on a browser, such as Google Chrome. 
This link is given in the form: "http://localhost:____/", where the "____" is replaced by a port number given.

The application grabs the current user location if allowed to by the user, then requests that location to the Google Maps API (if the location exists).
Secondly, it grabs all nearby universities to the user and sends individual responses to the Google Maps API with Axios.
After each request goes through, a Google Maps "Marker" is placed at each university and its facilities.

How does it tie in to the theme:"Turning over a New Leaf"?

The Website itself is very practical, an individual who maybe wanting a new chapter in their life can look at one of the many universities around them to which they may cater towards; also a feature to which the map provides most of the departments and facilities for new enrolled students and their convenience.


2. File structure:
   
   Backend Folder:
       models - db model
       node modules folder
       .env - stores private keys or URLs
       config.js - utilizes .env keys
       index.js - calls mongoose and uses express to create routes
       package-json files
   
   Frontend Folder:
       node modules folder
       public folder:
          vite instance svg file
       src folder:
          assets
          App.jsx - simply calls MapContainer.jsx 
          index.css - calls simple libraries fro tailwind
          Locationfetcher.jsx - uses axios to grab nearby universities/facilities
          main.jsx - calls app to run frontend
          MapContainer.jsx - allows user location grabbing and nearby universities/facilities parsing.
      Additonal/Redundant files were used for setup in frontend.
      package-json files
    
   .gitignore - ignores .env file
   
   README.md


   



