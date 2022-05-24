const express = require('express')

const app = express()

const ejs = require('ejs')

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false}))
app.use('/static', express.static('static'))
app.set('view engine', 'ejs')

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




app.get('/', (req, res) => {
    res.render('home')
})

app.get('/voorkeur', (req, res) => {
    res.render('voorkeur')
})

app.get('/resultaten', (req, res) => {
    res.render('resultaten')
})



app.get('/', (req,res) => {
    res.render('index');
});

app.post('/login', (req,res) => {
    const {name, password } = req.body;

    if (name === 'admin' && password === 'admin') {
        res.render('succes', {
            username: name,
        });
    } else {
        res.render('failure');
    }
});




//error handling
app.use((req, res, next) => {
    res.status(404).send('Sorry!, Page Not Found!')
})

//luisteren naar een port
app.listen(3000, () => {
    console.log('Server started on port 3000')
});
