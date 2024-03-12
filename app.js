const express = require('express');
const { json } = require('express');
const { join, dirname } = require('path');
const { config } = require('dotenv');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

//---Routes
const emergencyRoutes = require('./routes/emergencyRoutes.js');
const usersRoutes = require('./routes/userRoutes.js');

config({
    path: join(__dirname, 'process.env')
});

const app = express();
app.use(morgan("dev"));
app.use(json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());

// Routes Handling

app.use('/api/v1/user', usersRoutes);
app.use('/api/v1/emergency', emergencyRoutes);


//Invalid Routes Handler
app.all('*', (req, res, next) => {
    res.status(404).json(`Can't find ${req.originalUrl} on this server!`)
})


module.exports = app;