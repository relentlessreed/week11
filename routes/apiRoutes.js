// LOAD DATA
// We are linking our routes to a series of "data" sources.
const notesDb = require('../Develop/db/db.json');
const fs = require('fs');
const uniqid = require ('uniqid');
// ROUTING
module.exports = (app) => {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------
// read db.json file and return notes
  app.get('/api/notes', (req, res) => {
    res.json(notesDb)
});


  app.post('/api/notes', (req, res) => {
    //  Our "server" will create and add information to our database file
    const newNote = req.body
    // Assigns unique Id to our note
    newNote.id = uniqid()
    // Sending our new note to database
    notesDb.push(newNote)
    res.end()
  });

};
