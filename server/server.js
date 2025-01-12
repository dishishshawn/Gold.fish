const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb connection string', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.get('/', (req, res) => {
    res.send('Server is running');
})

app.listen(5000, () => {
    console.log('Server running on port 5000');
})

