const express = require('express');

const app = express()

//const res = require('express/lib/response');

// express()
//     .get('/', onhome)
//     .listen(3000)


// function onhome(req, res) {
//     res.send('<h1>Hello CLient</h1>\n')
// }


//var http = require('http');
//http.createServer(function (req, res) {
//res.writeHead(200, {'Content-Type': 'text/html'});
//res.end('Hello World!');
//}).listen(3000);





// responds with "Hello World!" wanneer er een get request wordt gedaan naar de homepage
//app.get('/', (req, res) => {
    //res.send("Hello World!")
//})

// pad naar de about pagina
app.get('/about', (req, res) => {
    res.send("about")
})

//pad naar de login pagina
app.get('/login', (req, res) => {
    res.send("login")
  })

//pad naar de registreren pagina
app.get('/registreren', (req, res) => {
   res.send("registreren")
  })

//pad naar de profiel pagina
//app.get('/profiel', (req, res) => {
    //res.send("profiel")
  //})


//gebruiken van de static files door express
app.listen(3000);