const dotenv = require('dotenv').config()

//express package aanroepen
// database
// const { dbConnect, dbGet } = require('./connection')

const { MongoClient, MongoKerberosError } = require('mongodb');

let uri = 'mongodb+srv://adminFestifinder:admin1234@projectcluster.bqqur.mongodb.net/?retryWrites=true&w=majority';
 
const client = new MongoClient(uri);

// const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=52.3738&longitude=4.8910&hourly=temperature_2m";

// const getData = fetch(apiUrl)
//     .then(response => response.json)
//     .then(jsonObject => console.log(jsonObject))

// getData();

//require 
const express = require('express');
const slug = require('slug');
const arrayify = require('arrayify');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const path = require('path');
const { ALL } = require('dns');

// const multer = require('multer')

// const upload = multer({ dest: 'uploads/'})

const app = express();


//de waarde van de poort op 3000 zetten voor gebruik van een lokale server
const port = 3000;


// Database connections
// let db


// dbConnect((err) => {
//     if (!err) {
//         //luisteren naar een port
//         app.listen(port, () => {
//         console.log('Server started on port 3000')
//         })
//         db = dbGet()
//     }
// })

// function dbConnect(cb) {
//     MongoClient.connect(uri)
//         .then((client) => {
//             dbConnection = client.db()
//             return cb()
//         })
//         .catch(err => {
//             console.error("Error 404: page not found");
//             res.status(404).render('404', 'Error 404: Sorry!, Page Not Found!')
//             return cb(err)
//         })
// };

// function dbGet() {
//     dbConnection
// };


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

//bodyparser
app.use(bodyParser.urlencoded({ extended: true }));


//middleware
app.use('/static', express.static('static'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//aangeven welke engine moet worden gebruikt voor het renderen van de templates van pagina's
app.set('view engine', 'ejs');


// routes
app.get('/', (req, res) => {
    res.render('home')
})

app.get('/voorkeuren', (req, res) => {
    res.render('voorkeuren')
})

// app.get('/resultaten', (req, res) => {
//     db.collection('evenementen')
//         .find()

//     res.render('resultaten')
// })

// const resultSchema = {
//     event: String,
//     genres: String,
//     date: String,
//     location: String
// };

// const eventResult = mongoose.model('Result', resultSchema)

const zoekResultaten = [

];


async function findMatch(client, userVoorkeur) {
    const cursor = client.db('DatabaseFestiFinder').collection('evenementen').find(userVoorkeur)

    const results = await cursor.toArray();
    console.log(results);

    zoekResultaten.push(JSON.stringify(results));

    console.log(zoekResultaten)
}

async function createVoorkeur(client, newVoorkeur) {
    const result = await client.db('DatabaseFestiFinder').collection('voorkeuren').insertOne(newVoorkeur)

    console.log(`Nieuw document met volgend id: ${result.insertedId}`)
}

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



// app.get('/test', (req, res) => {
//     let events = []
    
//     client.db.collection('evenementen')
//         .find()
//         .forEach(event => events.push(event))
//         .then(() => {
//             res.status(200).json(events)
//         })
//         .catch(() => {
//             res.status(500).json({error: "kon de documenten niet laden"})
//         })
// });



//     const result = await client.db("DatabaseFestiFinder").collection("voorkeuren").insertOne(newListing)

//     console.log(req.body);

//     console.log(voorkeuren)
//     console.log(`Nieuw document met volgend id: ${result.insertedId}`)
// })

//     console.log(voorkeuren)
    
//     res.render('resultaten', {zoekopdracht: voorkeuren})
// })

// async function findEvents() {
//     const result = await client.db("DatabaseFestiFinder").collection("evenementen").find({genres: voorkeuren.genre});

//     if (result) {
//         console.log(`resultaten gevonden voor '&{voorkeuren.genre}':`);
//     } else {
//         console.log("geen resultaten");
//     }
// }






//error handling
// app.use((req, res, next) => {
//     console.error("Error 404: page not found");
//     res.status(404).render('404', 'Error 404: Sorry!, Page Not Found!')
// });

