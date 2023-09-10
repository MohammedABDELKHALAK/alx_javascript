const request = require('request');

// Check if the movie ID is provided as a command line argument
if (process.argv.length !== 3) {
  console.error('Usage: node get_sw_movie_title.js <movie ID>');
  process.exit(1);
}

// Get the movie ID from the command line argument
const movieId = process.argv[2];

// Construct the URL with the provided movie ID
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

  // Print the movie title
  console.log(`Title: ${movieData.title}`);
});
