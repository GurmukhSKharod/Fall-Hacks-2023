Fall Hacks 2023

Gurmukh Kharod      301383004                  gsk13@sfu.ca
Iqbal Mathamu       Non-SFU Student            Iqbalsmatharu@hotmail.com

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
Vite was also used on the front-end to setup the app and its packages.

Overview: 

This app starts by running the backend server. Then the frontend server. This can be done in the terminal with "npm run dev".
Once the servers are running, we can click on the given frontend server link to run the app on a browser, such as Google Chrome. 
This link is given in the form: "http://localhost:____/", where the "____" is replaced by a port number given.

The application grabs the current user location if allowed to by the user, then requests that location to the Google Maps API (if the location exists).
Secondly, it grabs all nearby universities to the user and sends individual responses to the Google Maps API with Axios.
After each request goes through, a Google Maps "Marker" is placed at each university.

