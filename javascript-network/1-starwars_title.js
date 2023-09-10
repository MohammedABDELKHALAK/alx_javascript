const request = require('request');

// Get the movie ID from the command line argument
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

  // Print the movie title
  console.log(movieData.title);
});
