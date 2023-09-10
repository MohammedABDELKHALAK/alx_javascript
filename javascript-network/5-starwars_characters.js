#!/usr/bin/node
const exec = require('child_process').exec;

let child = exec("timeout 40s ./100-starwars_characters.js 5", function(error, stdout, stderr) {
  if (error) console.log(error);
  listCharacters = ["Anakin Skywalker", "Owen Lars", "R2-D2", "Beru Whitesun lars", "Yoda", "Obi-Wan Kenobi", "Jar Jar Binks", "Palpatine", "C-3PO", "Boba Fett", "Nute Gunray", "Ayla Secura", "Shmi Skywalker", "Kit Fisto", "Watto", "Mace Windu", "Ki-Adi-Mundi", "Poggle the Lesser", "Cliegg Lars", "Gregar Typho", "Plo Koon", "Barriss Offee", "CordÃ©", "Mas Amedda", "DormÃ©", "Luminara Unduli", "Jocasta Nu", "Dooku", "Bail Prestor Organa", "Jango Fett", "Zam Wesell", "Dexter Jettster", "Lama Su", "Taun We", "R4-P17", "Sly Moore", "PadmÃ© Amidala", "Shaak Ti", "San Hill", "Wat Tambor"];
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