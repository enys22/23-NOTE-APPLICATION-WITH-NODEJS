const notemanager = require('./notemanager')
const file = 'note-list.txt'

var argv = require('yargs')
    .command('read', 'Show the given note by Title',{
        title : {
            alias : 't',
            describe : 'Title of note',
            demandOption:true}
        },(argv)=>notemanager.readNoteByTitle(argv.title,file))

    .command('list', 'Show the list of all notes',{},()=>notemanager.showAllNotes(file))

    .command('add', 'Add new note',{
        title : {
            alias : 't',
            describe : 'Title of note',
            demandOption:true},
        body : {
            alias : 'b',
            describe : 'Title of note',
            demandOption:true}
        },(argv)=>{notemanager.addNote({title : argv.title ,body : argv.body },file)})

    .command('remove', 'Remove the given note by Title',{
        title : {
            alias : 't',
            describe : 'Title of note',
            demandOption:true}
        },(argv)=>notemanager.deleteNote(argv.title,file))

    .help('help')
    .alias('help', 'h')
    .argv;