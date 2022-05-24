const express = require('express')

const app = express()

const ejs = require('ejs')
const { includes } = require('lodash')

app.use('/static', express.static('static'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})


//error handling
app.use((req, res, next) => {
    res.status(404).send('Sorry!, Page Not Found!')
})

//luisteren naar een port
app.listen(3000, () => {
    console.log('Server started on port 3000')
});
