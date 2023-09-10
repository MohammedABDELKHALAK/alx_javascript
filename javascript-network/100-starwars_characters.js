// Import the 'request' module
const request = require('request');

// Get the movie ID from the command line arguments
const movieId = process.argv[2];

// Define the URL for the Star Wars API
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

// Make a GET request to the API
request(apiUrl, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const movieData = JSON.parse(body);
    const characters = movieData.characters;

    // Print each character name
    characters.forEach((characterUrl) => {
      request(characterUrl, (error, response, characterBody) => {
        if (!error && response.statusCode === 200) {
          const characterData = JSON.parse(characterBody);
          console.log(characterData.name);
        }
      });
    });
  } else {
    console.error('Error:', error);
  }
});
