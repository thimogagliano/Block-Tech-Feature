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

app.use('/static', express.static('static'))

//error handling
app.use((req, res, next) => {
    res.status(404).send('Sorry!, Page Not Found!')
})

app.set('views', './views')

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
})


//pad naar de profiel pagina
//app.get('/profiel', (req, res) => {
    //res.send("profiel")
  //})


//luisteren naar een port
app.listen(3000);