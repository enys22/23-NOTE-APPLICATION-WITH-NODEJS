const notemanager = require('./notemanager')
const file = 'note-list.txt'


let fctName = process.argv[2]
let title 
if (process.argv[3]==='--title' || process.argv[3]==='-t') title = process.argv[4]
let body
if (process.argv[5]==='--body' || process.argv[5]==='-b') body = process.argv[6]


let missingBegin = '\nOptions : \n  --help      Show help      [boolean]'
let missingTitle = '\n  --title,-t  Title of note  [required]'
let missingBody = '\n  --body,-b   Body of note   [required]'
let missingEnd = '\n\nMissing required argument : '
let help = '\nOptions :  \n list   Show the list of all notes \n read   Show the given note by Title \n        Reaquirement :\n        --title,-t  Title of note\n add    Add new note \n        Reaquirement :\n        --title,-t  Title of note\n        --body,-b   Body of note \n remove Remove the given note by Title\n        Reaquirement :\n        --title,-t  Title of note'

if(!fctName) console.log(missingBegin)
else {
    switch(fctName){
        case 'list':
            notemanager.showAllNotes(file)
            break;
        case 'read':
            if(!title) console.log(missingBegin+missingTitle+missingEnd+'title' )
            else notemanager.readNoteByTitle(title,file)
            break;
        case 'remove':
            if(!title) console.log( missingBegin+missingTitle+missingEnd+'title' )
            else notemanager.deleteNote(title,file)
            break;
        case 'add':
            if(!title || !body) console.log(`${missingBegin}  ${!title ? missingTitle : ''}  ${!body ? missingBody : ''}  ${missingEnd} ${!title ? 'title' : ''} ${!body && !title ? ',' : ''}  ${!body ? 'body' : ''}` )
            else notemanager.addNote({title,body},file)
            break;
        case '--help':
            console.log(help)
            break;
        default :
            console.log(help)

        }
}