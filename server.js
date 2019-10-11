const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const fs = require('fs');
const app = express();


app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(express.static('views'));


app.get('/', function(req, res) {
    res.render('contact');
});

app.get('/index', function(req, res) {
    res.render('index')
})


app.get('/contact', function(req, res) {
    res.render('contact')
})



app.get('/skills', function(req, res) {
    res.render('skills')
})


// app.get('/hello', function(req, res) {
//     res.sendFile(__dirname + '/views/hello.html');
//   })




app.listen(3005, function (){
    console.log('you are listening to the sweet sounds of 3005')
})

