const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

//Routes
const studentRoute = require('./routes/studentRoute');
app.use('/student', studentRoute);

const gradeRouter = require('./routes/gradeRouter');
app.use('/grade', gradeRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// Connecting to the database

//synchronous connection
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/StudentDB', {useNewUrlParser: true}, (err) => {
//     if (!err) {
//         console.log('MongoDB connection succeeded.');
//     } else {
//         console.log('Error in DB connectin : ' + err);
//     }
// });

// Asynchronous connection
mongoose.connect('mongodb+srv://kwenglar:dU2MRbs9G6jagnUb@cluster0.b60zlzq.mongodb.net/demodb', {useNewUrlParser: true})
    .then(() => console.log('MongoDB connection successful'))
    .catch((err) => console.log(err));

