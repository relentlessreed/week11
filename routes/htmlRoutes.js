// ROUTING
// Explicitly tells our server where our file we want is
const path = require('path');
module.exports = (app) => {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------
// Serves our Note file when at /notes endpoint
  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../Develop/public/notes.html'));
  });
// Serves index.html file as a default when at our home(index) directory
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../Develop/public/index.html'));
  });
};