const request = require('request');

const movieId = process.argv[2]; // Get the movie ID from the command line arguments

if (!movieId) {
  console.log('Please provide a valid movie ID.');
  process.exit(1);
}

const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error(`Request failed with status code ${response.statusCode}`);
    return;
  }

  const movieData = JSON.parse(body);
  const characters = movieData.characters;

  if (characters.length === 0) {
    console.log('No characters found for this movie.');
  } else {
    characters.forEach((characterUrl) => {
      request(characterUrl, (charError, charResponse, charBody) => {
        if (!charError && charResponse.statusCode === 200) {
          const characterData = JSON.parse(charBody);
          console.log(characterData.name);
        }
      });
    });
  }
});
