#!/usr/bin/node
const exec = require('child_process').exec;

let child = exec("timeout 40s ./100-starwars_characters.js 1", function(error, stdout, stderr) {
  if (error) console.log(error);
  listCharacters = ["C-3PO", "Luke Skywalker", "Darth Vader", "R2-D2", "Beru Whitesun lars", "Leia Organa", "R5-D4", "Owen Lars", "Chewbacca", "Wilhuff Tarkin", "Jabba Desilijic Tiure", "Wedge Antilles", "Raymus Antilles", "Jek Tono Porkins", "Obi-Wan Kenobi", "Biggs Darklighter", "Greedo", "Han Solo"];
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