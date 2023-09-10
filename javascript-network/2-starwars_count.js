const request = require('request');

// Get the API URL from the command line argument
const apiUrl = process.argv[2];

if (!apiUrl) {
  console.error('Please provide the API URL as the first argument.');
  process.exit(1);
}

// Define the character ID for Wedge Antilles
const characterId = 18;

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
  const filmsData = JSON.parse(body);

  // Filter the films where Wedge Antilles is present
  const filmsWithWedgeAntilles = filmsData.results.filter((film) =>
    film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)
  );

  // Print the number of films with Wedge Antilles
  console.log(filmsWithWedgeAntilles.length);
});
