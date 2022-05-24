const express = require('express')
const app = express()
const ejs = require('ejs')
const bodyParser = require('body-parser')
const path = require('path')

app.use(bodyParser.urlencoded({ extended: false }))
app.use('/static', express.static('static'))
app.set('view engine', 'ejs')



app.get('/', (req, res) => {
    res.render('index')
})

app.post('/login', (req,res) => {
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
