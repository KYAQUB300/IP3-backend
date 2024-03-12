const mongoose = require('mongoose');

const dbUri = 'mongodb://localhost:27017';

mongoose.connect(dbUri).then(() => {
  console.log("Database is connected successfully.");
}).catch((error) => {
  console.error("Error connecting: " + error.message);
});

