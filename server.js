const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Welcome to Data Representation & Querying')
})
// root point
app.get('/hello/:name', (req,res) =>{
    console.log(req.params.name);
    res.send('Hello '+ req.params.name);
})

// Listening for http get request
// and sending json data
app.get('/api/movies', (req, res) => {
    //json data
    const myMovies = [
        {
        "Title": "Avengers: Infinity War",
        "Year": "2018",
        "imdbID": "tt4154756",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
        "Title": "Captain America: Civil War",
        "Year": "2016",
        "imdbID": "tt3498820",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
    ];
    //creating movies object, and passing myMovies json list
    //sending data from server to client
    res.json({movies:myMovies});
})

// Sending HTML File
app.get('/test' , (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/name' , (req, res) =>{
    res.send('Hello ' + req.query.fname + ' ' + req.query.lname)
})
// the data is sent as a part of the body as a http request 
app.post('/name', (req, res)=>{
    res.send('Hello '+ req.body.fname + ' ' +req.body.lname);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})