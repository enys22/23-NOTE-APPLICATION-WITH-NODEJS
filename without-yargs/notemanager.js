const fs = require('fs');

const getNotes =(file)=>{
    return JSON.parse(fs.readFileSync(file));
}

const saveData = (data,file,action) =>{
    fs.writeFile(file,JSON.stringify(data),()=>console.log(action))
}

const addNote = (note,file) =>{
    let noteList = getNotes(file);
    noteList.push(note)
    saveData(noteList,file,`Note created\n--\ntitle : ${note.title}\nbody : ${note.body}`)
}

const deleteNote = (data,file) =>{
    let noteList = getNotes(file).filter(el=>el.title!==data)
    saveData(noteList,file,'Note was removed')
}

const showAllNotes = (file) => {
    let noteList = getNotes(file)
    console.log(`Printing ${noteList.length} note(s)\n--`)
    noteList.map(note=>console.log(`title : ${note.title}\nbody : ${note.body}`))
}

const readNoteByTitle = (title,file) => {
    let note = getNotes(file).filter(el=>el.title===title)
    if(note.length) console.log(`Note Found\n--\ntitle : ${note[0].title}\nbody : ${note[0].body}`)
    else console.log('Note not found')
}

module.exports = {addNote,deleteNote,showAllNotes,readNoteByTitle}