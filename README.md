# Google Maps - Universities Near You Application

## Skills

### Frontend Development

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

### Backend Development

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

### Tools & Libraries

![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)


## 1. Project description

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


## 4. Acknowledgments for any libraries, APIs, or resources:
   
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






   



   



