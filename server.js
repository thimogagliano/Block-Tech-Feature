const express = require('express')
const app = express()
const ejs = require('ejs')
const bodyParser = require('body-parser')
const path = require('path')
const { method, url } = request;
const { headers } = request;
const userAgent = headers['user-agent']


app.use(bodyParser.urlencoded({ extended: false }))
app.use('/static', express.static('static'))
app.set('view engine', 'ejs')




//const http = require('http');

//http.createServer((request, response) => {
//  const { headers, method, url } = request;
//  let body = [];
//  request.on('error', (err) => {
 //   console.error(err);
 // }).on('data', (chunk) => {
 //   body.push(chunk);
 // }).on('end', () => {
   // body = Buffer.concat(body).toString();
    // BEGINNING OF NEW STUFF

   // response.on('error', (err) => {
     // console.error(err);
    //});

    //response.statusCode = 200;
    //response.setHeader('Content-Type', 'application/json');
    // Note: the 2 lines above could be replaced with this next one:
    // response.writeHead(200, {'Content-Type': 'application/json'})

    //const responseBody = { headers, method, url, body };

    //response.write(JSON.stringify(responseBody));
    //response.end();
    // Note: the 2 lines above could be replaced with this next one:
    // response.end(JSON.stringify(responseBody))

    // END OF NEW STUFF
  //});
//}).listen(3000);

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', (req, res) => {
    const { name, password } = req.body;

    if (name === 'admin' && password === 'admin') {
        res.render('success', {
            username: name,
        })
    } else {
        res.render('failure')
    }
})

//error handling
app.use((req, res, next) => {
    res.status(404).send('Sorry!, Page Not Found!')
})

//luisteren naar een port
app.listen(3000, () => {
    console.log('Server started on port 3000')
});
