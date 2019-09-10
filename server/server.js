const express = require('express');
const bodyParser = require('body-parser');

// App Set //
const PORT = process.env.PORT || 5000;
const app = express();

//
// EXPRESS APPLICATION MIDDLEWARE
// ------------------------------------------------------------

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// setup cookie session

//
// API ROUTES
// ------------------------------------------------------------

// save the creature to cookie session
app.post('/creature', (req, res) => {
    // save creature sent
});

// retrieve the creature stored with cookie session
app.get('/creature', (req,res) => {
    // retrieve creature from cookie session
});

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});