console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () =>{
    try {
        return JSON.parse(fs.readFileSync('notes-data.json'));
    } catch (e){
        return [];
    }
}

var addNote = (title,body) => {
    var notes= [];
    notes = fetchNotes(); 
    var note = {
        title,
        body
    };
    for (let savedNote of notes) {
        if (savedNote.title == note.title){
                console.log(`Note title exists, Re-attempt saving with a new title`);
                process.exit();
        }      
    }
    
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var getNotes = () => {
    console.log('Getting all notes');
};

var getNote = (title)=>{
    console.log('Getting note', title);
};

var removeNote = (title) =>{
    console.log('Removing note', title);
};

module.exports= {
    addNote,
    getNotes,
    getNote,
    removeNote
};
