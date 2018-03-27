const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

// console.log(_.isString(true));
// console.log(_.isString('pizza'));

// let arry = _.uniq(['memo',1,'me',1,2,3,4]);
// console.log(arry);

const argv = yargs.argv;

let command = process.argv[2];

console.log("Command :",command);
console.log("Yargs :",argv);

if( command === 'add' ){
    let note = notes.addNote(argv.title,argv.body);
    if(note){
        console.log("Note Created");
        notes.logNote(note);
    } else {
        console.log("Note title Taken");
    }
}else if( command === 'list' ){
    notes.getAll();
} else if (command === 'read' ){
    let note = notes.readNote(argv.title);
    if(note){
        console.log("Note Found !!!!");
        notes.logNote(note);
    }else{
        console.log("Note not found!!!");
    }
}else if ( command = 'remove' ){
    let noteRemoved = notes.removeNote(argv.title);
    let message = noteRemoved ?  "Note Was Removed" : "Note Not Removed";
    console.log(message);
}else{
    console.log("Command Not Understood")
};


// let result = notes.add(1,88);
// console.log(result);
// var user = os.userInfo()

// console.log("Inside App.js");
// fs.appendFile("greet.txt",`Hey there ${user.username}, are you ${notes.age}`);


// var greet = fs.readFile(__dirname + "/greet.txt",function(err,data){
//     console.log("peewee's big adventure");
// });
