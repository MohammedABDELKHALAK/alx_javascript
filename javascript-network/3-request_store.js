// Import the 'axios' module
const axios = require('axios');

// Get the movie ID from the command line arguments
const movieId = process.argv[2];

// Define the URL for the Star Wars API
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

// Make a GET request to the API using axios
axios.get(apiUrl)
  .then((response) => {
    const movieData = response.data;
    const characterUrls = movieData.characters;

    // Function to fetch character names and print them
    const fetchAndPrintCharacters = async () => {
      for (const characterUrl of characterUrls) {
        try {
          const characterResponse = await axios.get(characterUrl);
          const characterData = characterResponse.data;
          console.log(characterData.name);
        } catch (error) {
          console.error('Error fetching character data:', error.message);
        }
      }
    };

    // Call the function to fetch and print characters
    fetchAndPrintCharacters();
  })
  .catch((error) => {
    console.error('Error fetching movie data:', error.message);
  });
