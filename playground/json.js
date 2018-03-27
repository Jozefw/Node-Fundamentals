// let obj = {
//     name: "Me"
// };

// let stringy = JSON.stringify(obj);
// console.log(stringy); 
// console.log(typeof stringy); 

// let person = '{"name":"nemo","type":"fish"}';

// let personOb = JSON.parse(person);
// console.log(personOb.name);

const fs = require('fs');

let originalNote = {
    title:"New Title",
    body:"Rando Crap"
};

let originalNoteSrtring = JSON.stringify(originalNote);
fs.writeFileSync("notes.json",originalNoteSrtring);

let noteString = fs.readFileSync("notes.json");
let noteStringObj = JSON.parse(noteString);
console.log(noteStringObj);