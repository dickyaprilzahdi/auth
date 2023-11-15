const express = require('express');
const app = express();

// Import route
const authRoute = require('./routes/auth');

// Middleware route
app.use('/api/user', authRoute);

app.listen(3000, () => console.log('Server berjalan dengan normal...'))