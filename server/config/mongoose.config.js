const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/indie")
    .then(() => console.log("Successfully established a connection to the database :)"))
    .catch(err => console.log("Uh-oh! Something went wrong while connecting to the database :(", err));

