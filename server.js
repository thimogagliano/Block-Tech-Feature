const express = require('express');

const app = express()

const pug = require('ejs')


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







app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/voorkeur', (req, res) => {
    res.render('voorkeur')
})

app.get('/resultaten', (req, res) => {
    res.render('resultaten')
})

//error handling
app.use((req, res, next) => {
    res.status(404).send('Sorry!, Page Not Found!')
})

//luisteren naar een port
app.listen(3000);
