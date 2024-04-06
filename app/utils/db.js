const mongoose = require('mongoose');

// Replace the following with your own MongoDB connection string
const connectionString = 'mongodb://localhost:27017/few';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Failed to connect to MongoDB', error));