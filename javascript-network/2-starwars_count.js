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

  // Debug: Print the entire filmsData to see its structure
  console.log(filmsData);

  // Initialize a counter for films with Wedge Antilles
  let filmsWithWedgeAntillesCount = 0;

  // Use a loop to iterate through the films and check if Wedge Antilles is present
  for (const film of filmsData.results) {
    if (film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)) {
      filmsWithWedgeAntillesCount++;
    }
  }

  // Debug: Print the count and the list of films
  console.log('Count:', filmsWithWedgeAntillesCount);
  console.log('Films:', filmsData.results);

  // Print the number of films with Wedge Antilles
  console.log(filmsWithWedgeAntillesCount);
});
