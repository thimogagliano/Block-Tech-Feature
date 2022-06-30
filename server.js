//variableen
const dotenv = require('dotenv').config()
const { MongoClient } = require('mongodb'); 
let uri = 'mongodb+srv://adminFestifinder:admin1234@projectcluster.bqqur.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);
const express = require('express');
const arrayify = require('arrayify');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const path = require('path');
const { ALL } = require('dns');
const app = express();
const port = 3000;
const zoekResultaten = [

];



//bodyparser
app.use(bodyParser.urlencoded({ extended: true }));



//middleware
app.use('/static', express.static('static'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//aangeven welke engine moet worden gebruikt voor het renderen van de templates van pagina's
app.set('view engine', 'ejs');



// database mongodb connection
async function main() {
    try {
        await client.connect();

        await listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close()
        console.log('succes');
    }
}

main().catch(console.error);



// routes
app.get('/', (req, res) => {
    res.render('home')
})

app.get('/voorkeuren', (req, res) => {
    res.render('voorkeuren')
})

app.post('/resultaten', async (req, res) => {
    await client.connect()

    await createVoorkeur(client, {
        genres: req.body.muziekgenre,
        date: req.body.datum,
        location: req.body.locatie
    })

    let voorkeuren = {
        genre: req.body.muziekgenre,
        datum: req.body.datum,
        locatie: req.body.locatie
    }

    await findMatch(client, {
        genres: voorkeuren.genre,
    })     

    res.render('resultaten', {zoekopdracht: voorkeuren, resultaten: zoekResultaten})
})



// functie loggen van alle databases
async function listDatabases(client){
    app.listen(port, () => {
    console.log('Server started on port 3000')
    })

    databasesList = await client
        .db()
        .admin()
        .listDatabases();
 
    console.log("Databases:");
    databasesList.databases
        .forEach(db => console.log(` - ${db.name}`));
};



//functie nieuw voorkeur document aanmaken in de voorkeuren cluster gebruikt in app.post
async function createVoorkeur(client, newVoorkeur) {
    const result = await client.db('DatabaseFestiFinder').collection('voorkeuren').insertOne(newVoorkeur)

    console.log(`Nieuw document met volgend id: ${result.insertedId}`)
}



// functie vinden van een match met de user input gebruikt in app.post
async function findMatch(client, userVoorkeur) {
    const cursor = client.db('DatabaseFestiFinder').collection('evenementen').find(userVoorkeur)

    const results = await cursor.toArray();
    console.log(results);

    zoekResultaten.push(JSON.stringify(results));

    console.log(zoekResultaten)
}



// error handling
app.use((req, res, next) => {
    console.error("Error 404: page not found");
    res.status(404).render('404', 'Error 404: Sorry!, Page Not Found!')
});

// const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=52.3738&longitude=4.8910&hourly=temperature_2m";

// const getData = fetch(apiUrl)
//     .then(response => response.json)
//     .then(jsonObject => console.log(jsonObject))

// getData();