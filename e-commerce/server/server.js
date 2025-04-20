const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const routes = require('./routes/routes')
const mongoose = require('mongoose');
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());
app.use('/e-commerce', routes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
