// database
// const { dbConnect, dbGet } = require('./connection')

const { MongoClient } = require('mongodb');

let uri = 'mongodb+srv://adminFestifinder:admin1234@projectcluster.bqqur.mongodb.net/?retryWrites=true&w=majority';
 
const client = new MongoClient(uri);

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

//een array met genres voor de verschillende evemementen
const genres = ['Techno', 'House', 'R&B', 'Hip-hop', 'Hardcore', 'Hardstyle', 'Pop', 'Tech-house', 'EDM', 'Electro', 'Urban'];

//een array met evenementen opslaan in de server
const evenementen = [
    {
        "event": 'Awakenings',
        "datum": '29-31/07/2022',
        "genres": ['Techno', 'Tech-house'],
        "locatie": 'Hilvarenbeek, Noord-Brabant'
    },
    {
        "name": 'Soenda',
        "datum": '21/05/2022',
        "genres": ['Techno', 'House', 'Tech-house'],
        "locatie": 'Ruigenhoekse polder, Utrecht'
    },
    {
        "name": 'Verknipt',
        "datum": '11-12/06/2022',
        "genres": ['Techno', 'Tech-house'],
        "locatie": 'Strijkviertelplas, Utrecht,'
    },
    {
        "name": 'Woohah',
        "datum": '1-3/07/2022',
        "genres": ['R&B', 'Hip-hop', 'Urban'],
        "locatie": 'Beeksebergen, Noord-Brabant'
    },
    {
        "name": 'Strafwerk',
        "datum": '20/08/2022',
        "genres": ['House', 'Tech-house', 'Techno'],
        "locatie": 'Havenpark, Amsterdam, Noord-Holland'
    },
    {
        "name": 'Pinkpop',
        "datum": '17-19/06/2022',
        "genres": ['Pop'],
        "locatie": 'Megaland, Landgraaf, Limburg'
    },
    {
        "name": 'Reaktor',
        "datum": '02/04/2022',
        "genres": ['Techno'],
        "locatie": 'Elementstraat 25, Amsterdam, Noord-Holland'
    },
    {
        "name": 'Rotterdamrave',
        "datum": '13/08/2022',
        "genres": ['Techno'],
        "locatie": 'RDM-Grounds, Rotterdam, Zuid-Holland'
    },
    {
        "name": 'Thuishaven',
        "datum": '4-5/06/2022',
        "genres": ['Tech-house', 'House', 'Techno'],
        "locatie": 'Thuishaven Festivalterrein, Amsterdam, Noord-Holland'
    },
    {
        "name": 'Tomorrowland',
        "datum": '15-31/07/2022',
        "genres": ['EDM', 'Electro', 'House', 'Tech-house', 'Techno'],
        "locatie": 'Provinciaal Recreatiedomein De Schorre, Boom, België'
    },
    {
        "name": 'Intents',
        "datum": '27-29/05/2022',
        "genres": ['Hardcore', 'Hardstyle'],
        "locatie": 'Oisterwijk, Noord-Brabant'
    },
    {
        "name": 'Supremacy',
        "datum": '20/09/2022',
        "genres": ['Hardcore', 'Hardstyle'],
        "locatie": 'Brabanthallen, Den Bosch, Noord-Brabant'
    },
];

const userVoorkeur = [
];


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

app.get('/resultaten', (req, res) => {
    db.collection('evenementen')
        .find()

    res.render('resultaten')
})

app.get('/test', (req, res) => {
    let events = []
    
    db.collection('evenementen')
        .find()
        .forEach(event => events.push(event))
        .then(() => {
            res.status(200).json(events)
        })
        .catch(() => {
            res.status(500).json({error: "kon de documenten niet laden"})
        })
});

// app.post('/resultaten', (req, res) => {
//     client.db("DatabaseFestiFinder").collection("voorkeuren").insertOne({"genres": req.body.muziekgenre, "date": req.body.datum, "locatie": req.body.locatie});

//     console.log(req.body);
//     let voorkeuren = {
//         genre: req.body.muziekgenre,
//         datum: req.body.datum,
//         locatie: req.body.locatie,
//     };

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

