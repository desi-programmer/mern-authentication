const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// Connect to databse 
require('./config/connect_database')();

// Body parser
app.use(express.json({ extended : true }));
app.use(cors());

// app.use(express.static(path.join(__dirname , 'public')));

app.use('/api/register', require('./controllers/apis/register'));
app.use('/api/login', require('./controllers/apis/login'));
app.use('/api/logout', require('./controllers/apis/logout'));
app.use('/api/profile', require('./controllers/apis/profile'));


app.use('/api/book', require('./controllers/apis/book-service'));
app.use('/api/bookings', require('./controllers/apis/booking_history'));


// app.use(express.static(path.join(__dirname , 'build')));
// app.get('*', (req,res) =>{
//     res.sendFile(path.join(__dirname , 'build/index.html'));
// });


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server Started at  PORT : ${PORT}`),);
