# Google Maps - Universities Near You Application

## 1. Project description, how does it tie in to the theme?

This project shows all nearby universities to the users current location, and is displayed using the Google Maps API on a Google Maps Display.

This project implements the Google Maps API within A Full Stack MERN App.
The MERN app uses MongoDb with mongoose, express.js, React.js, and Node.js.

### Back-End:
Simply implements a MongoDB Database and calls mongoose.connect() to use the DB.
Using Node.js to utlize node modules.
Node modules are used to allow express functions such as request/respose.
A config.js file holds all ports and URLs.

### Front-End:
React was mainly used as the front end language.
Axios was used to make HTTP requests for the Google Maps API.
Vite and was used on the front-end to setup the app and its packages.

### Overview: 

The application grabs the current user location if allowed to by the user, then requests that location to the Google Maps API (if the location exists).
Secondly, it grabs all nearby universities to the user and sends individual responses to the Google Maps API with Axios.
After each request goes through, a Google Maps "Marker" is placed at each university and its facilities.

How does it tie in to the theme:"Turning over a New Leaf"?

The Website itself is very practical, an individual who maybe wanting a new chapter in their life can look at one of the many universities around them to which they may cater towards; also a feature to which the map provides most of the departments and facilities for new enrolled students and their convenience.



## 2. File structure:
   
   ### Backend Folder:
       models - db model
       node modules folder
       .env - stores private keys or URLs
       config.js - utilizes .env keys
       index.js - calls mongoose and uses express to create routes
       package-json files
   
   ### Frontend Folder:
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



## 3. Order of operations outlining the steps to set up and run your project:

The application was completed in VS Code, and must run in vs code. The backend and frontend must be run seperately.

### To run backend:
   1. run in vs code in terminal
   2.  cd backend, if not in backend already
   3. "npm run dev" to run backend
   4. goto http://localhost:7777/ to see backend working. Should show - Fall Hacks 2023 Application backend

### To run frontend:
   1. run in vs code in terminal
   2. cd frontend, if not in frontend already
   3. "npm run dev" to run frontend

Once the servers are running, we can click on the given frontend server link to run the app on a browser, such as Google Chrome. 
This link is given in the form: "http://localhost:____/", where the "____" is replaced by a port number given.

This should immediately go the users current location, after the user clicks allow in the top left, and then list markers with nearby universities and facilities.

NOTE: If the nearby universities and facilities dont show up immediately, please try running the frontend again, as it seems to sometimes be slower on the first run.



## 4. Participant names and contact information have been given above.



## 5. Acknowledgments for any libraries, APIs, or resources you used in your project:
   
   This project utlized Node.js, React.js, Express.js, MongoDb, Vite, Tailwind.css, Axios, React-Router-DOM.
   https://nodejs.org/en
   https://react.dev/
   https://expressjs.com/
   https://www.mongodb.com/
   https://vitejs.dev/
   https://tailwindcss.com/
   https://axios-http.com/docs/intro
   https://www.npmjs.com/package/react-router-dom

   Link to Google Maps API: https://developers.google.com/maps

## 6. Link to your GitHub project repository with your source code and video tutorial (can be added within 48 hours of FallHacks end):

https://github.com/GurmukhSKharod/Fall-Hacks-2023





   



   



