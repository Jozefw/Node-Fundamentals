const fs = require('fs');

const fetchNotes = () =>{
    try{
        let notesString = fs.readFileSync("data-json.json");
        return JSON.parse(notesString);
    } catch(e){
        console.log("BOOOOOM....everything crashed");
        return [];
    }
}
const saveNotes = (notes) =>{
    fs.writeFileSync("data-json.json",JSON.stringify(notes));
}

let addNote = (title,body)=>{
    let notes = fetchNotes();
    let note = {
        title,
        body
    };

    let duplicates = notes.filter((item) =>{
        return item.title === title;
    });
    if(duplicates.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
}
let readNote = (title)=>{
    let singleNote = fetchNotes();
    let filteredNote = singleNote.filter((note)=> {
        return note.title === title;
    });
    return filteredNote[0];
}
let removeNote = (title)=>{
    let allNotes = fetchNotes();
    let filteredNotes = allNotes.filter((note)=>{
        return note.title !== title
    });
    saveNotes(filteredNotes);
    return allNotes.length !==filteredNotes.length;
}

let getAll = ()=>{
    return fetchNotes();
}

let logNote = (note) => {
    debugger;
    console.log("---");
        console.log(`Title; ${note.title}`);
        console.log(`Body; ${note.body}`);
}

module.exports = {
    addNote,
    readNote,
    removeNote,
    getAll,
    logNote
}