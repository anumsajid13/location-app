const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const port=4000;
dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/MapDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error.message);
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${port}`);
});
