#!/usr/bin/node
const exec = require('child_process').exec;

let child = exec("timeout 40s ./100-starwars_characters.js 3", function(error, stdout, stderr) {
  if (error) console.log(error);
  listCharacters = ["Luke Skywalker", "Leia Organa", "Han Solo", "Obi-Wan Kenobi", "Jabba Desilijic Tiure", "R2-D2", "Palpatine", "Wedge Antilles", "Lando Calrissian", "Chewbacca", "Mon Mothma", "Boba Fett", "Arvel Crynyd", "Ackbar", "Bib Fortuna", "Nien Nunb", "Wicket Systri Warrick", "C-3PO", "Darth Vader", "Yoda"];
  nbCharacters = listCharacters.length;
  listCharactersFound = [];
  
  stdoutLines = stdout.split("\n");
  for (let index = 0; index < stdoutLines.length; index++) {
      let line = stdoutLines[index];
      let idxItem = listCharacters.indexOf(line);
      if (idxItem >= 0) {
        listCharactersFound.push(line);
        listCharacters.splice(idxItem, 1);
      }
  }

  if ((nbCharacters == listCharactersFound.length) && (listCharacters.length == 0)) {
    process.stdout.write("OK");
  }
  else {
    console.log("Missing some characters");
    console.log(listCharactersFound);
    console.log(listCharacters);
  }
});