const request = require('request');

const url = process.argv[2];

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const films = JSON.parse(body);
    const wedgeFilms = films.filter((film) => {
      return film.characters.includes(18);
    });
    console.log(wedgeFilms.length);
  }
});
