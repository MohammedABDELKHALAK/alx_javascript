const request = require('request');

// Get the movie ID from the command line arguments
const movieId = process.argv[2];

if (!movieId) {
  console.error('Please provide a movie ID as an argument.');
  process.exit(1);
}

// Define the Star Wars API endpoint
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Make a GET request to the API URL
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error('HTTP request failed with status code:', response.statusCode);
    process.exit(1);
  }

  // Parse the JSON response
  const movie = JSON.parse(body);

  // Print the characters
  movie.characters.forEach((characterUrl) => {
    // Make a GET request to the character URL
    request.get(characterUrl, (charError, charResponse, charBody) => {
      if (charError) {
        console.error('Error:', charError.message);
      } else if (charResponse.statusCode !== 200) {
        console.error('HTTP request failed with status code:', charResponse.statusCode);
      } else {
        // Parse the character JSON response
        const character = JSON.parse(charBody);
        console.log(character.name);
      }
    });
  });
});
