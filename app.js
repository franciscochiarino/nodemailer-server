// Import
const express = require('express');
const createError = require('http-errors');
const dotenv = require('dotenv');
const indexRoute = require('./routes/indexRoute');
const contactRoute = require('./routes/contactRoute');
const { setCors } = require('./middlewares/security');

// Setup
const app = express();
dotenv.config();

// Set Port
const port = process.env.PORT || 3001;

// Middlewares
app.use(express.json());
app.use(setCors);

// Routes
app.use('/', indexRoute);
app.use('/contact', contactRoute);

// Errors
app.use((req, res, next) => {
  next(createError(404))
});
app.use((err, req, res, next) => {
  res.json({
      status: err.status,
      err: err.message
  })
});

app.listen(port, () => console.log(`Server is running`));