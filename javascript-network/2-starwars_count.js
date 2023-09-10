const request = require('request');

// Check if the API URL is provided as a command line argument
if (process.argv.length !== 3) {
  console.error('Usage: node count_sw_movies_with_wedge.js <API URL>');
  process.exit(1);
}

// Get the API URL from the command line argument
const apiUrl = process.argv[2];

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
  const data = JSON.parse(body);

  // Filter movies where "Wedge Antilles" (character ID 18) is present
  const moviesWithWedge = data.results.filter(movie =>
    movie.characters.includes('https://swapi-api.alx-tools.com/api/people/18/')
  );

  // Print the number of movies with Wedge Antilles
  console.log(`Number of movies with Wedge Antilles: ${moviesWithWedge.length}`);
});
