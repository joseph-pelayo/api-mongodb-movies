/*=============================================*/
/*==== Import required modules
/*=============================================*/

// Import the Express library
const express = require('express');


/*=============================================*/
/*==== Configure the application
/*=============================================*/

// Instantiate an Express object
const app = express();





/*=============================================*/
/*==== Configure and run the HTTP server
/*=============================================*/

// Define a port to listen with 'process.env' method
const SERVER_PORT = process.env.DB_PORT || 8080;

// Launch server that listens for HTTP requests on specified port
const serverErrorMessage = "Error occured, server can't start !";
const serverOnlineMessage = `Server is successfully running, and the application is available on http://localhost:${SERVER_PORT}`;
app.listen(SERVER_PORT, (err) => err? console.error(serverErrorMessage, err) : console.log(serverOnlineMessage));