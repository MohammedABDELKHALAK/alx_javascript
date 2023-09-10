const request = require('request');

// Define the Movie ID (e.g., 3 for "Return of the Jedi")
const movieId = process.argv[2];

if (!movieId) {
  console.error('Please provide a Movie ID as the first argument.');
  process.exit(1);
}

// Define the Star Wars API URL
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Perform a GET request to the Star Wars API
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error('API request failed with status code:', response.statusCode);
    process.exit(1);
  }

  // Parse the JSON response
  const movieData = JSON.parse(body);

  if (!movieData.characters || movieData.characters.length === 0) {
    console.log('No characters found for this movie.');
    process.exit(0);
  }

  // Fetch and print character names
  console.log(`Characters in "${movieData.title}":`);
  movieData.characters.forEach((characterUrl) => {
    request.get(characterUrl, (charError, charResponse, charBody) => {
      if (charError) {
        console.error('Error fetching character:', charError.message);
      } else {
        const characterData = JSON.parse(charBody);
        console.log(characterData.name);
      }
    });
  });
});
