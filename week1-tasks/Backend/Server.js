const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.json());

const quotesRoutes = require('./Routes/QuotesRoutes');

mongoose.connect(process.env.MONGO)
.then(() => console.log('MongoDB connected...'))
.catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;

app.use('/quotes', quotesRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);    
});