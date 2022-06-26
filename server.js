//require 
const express = require('express');
const slug = require('slug');
const arrayify = require('arrayify');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const path = require('path');

// const multer = require('multer')

// const upload = multer({ dest: 'uploads/'})

const app = express();




//const { method, url } = request;
//const { headers } = request;
//const userAgent = headers['user-agent']

//de waarde van de poort op 3000 zetten voor gebruik van een lokale server
const port = 3000;

//een array met genres voor de verschillende evemementen
const genres = ['Techno', 'House', 'R&B', 'Hip-hop', 'Hardcore', 'Hardstyle', 'Pop', 'Tech-house', 'EDM', 'Electro', 'Urban'];

//een array met evenementen opslaan in de server
const evenementen = [
    {
        "id": 1,
        "slug": 'awakenings',
        "name": 'Awakenings',
        "datum": '29-31/07/2022',
        "genres": ['Techno', 'Tech-house'],
        "locatie": 'Hilvarenbeek, Noord-Brabant'
    },
    {
        "id": 2,
        "slug": 'soenda',
        "name": 'Soenda',
        "datum": '21/05/2022',
        "genres": ['Techno', 'House', 'Tech-house'],
        "locatie": 'Ruigenhoekse polder, Utrecht'
    },
    {
        "id": 3,
        "slug": 'verknipt',
        "name": 'Verknipt',
        "datum": '11-12/06/2022',
        "genres": ['Techno', 'Tech-house'],
        "locatie": 'Strijkviertelplas, Utrecht,'
    },
    {
        "id": 4,
        "slug": 'woohah',
        "name": 'Woohah',
        "datum": '1-3/07/2022',
        "genres": ['R&B', 'Hip-hop', 'Urban'],
        "locatie": 'Beeksebergen, Noord-Brabant'
    },
    {
        "id": 5,
        "slug": 'strafwerk',
        "name": 'Strafwerk',
        "datum": '20/08/2022',
        "genres": ['House', 'Tech-house', 'Techno'],
        "locatie": 'Havenpark, Amsterdam, Noord-Holland'
    },
    {
        "id": 6,
        "slug": 'pinkpop',
        "name": 'Pinkpop',
        "datum": '17-19/06/2022',
        "genres": ['Pop'],
        "locatie": 'Megaland, Landgraaf, Limburg'
    },
    {
        "id": 7,
        "slug": 'reaktor',
        "name": 'Reaktor',
        "datum": '02/04/2022',
        "genres": ['Techno'],
        "locatie": 'Elementstraat 25, Amsterdam, Noord-Holland'
    },
    {
        "id": 8,
        "slug": 'rotterdamrave',
        "name": 'Rotterdamrave',
        "datum": '13/08/2022',
        "genres": ['Techno'],
        "locatie": 'RDM-Grounds, Rotterdam, Zuid-Holland'
    },
    {
        "id": 9,
        "slug": 'thuishaven',
        "name": 'Thuishaven',
        "datum": '4-5/06/2022',
        "genres": ['Tech-house', 'House', 'Techno'],
        "locatie": 'Thuishaven Festivalterrein, Amsterdam, Noord-Holland'
    },
    {
        "id": 10,
        "slug": 'tomorrowland',
        "name": 'Tomorrowland',
        "datum": '15-31/07/2022',
        "genres": ['EDM', 'Electro', 'House', 'Tech-house', 'Techno'],
        "locatie": 'Provinciaal Recreatiedomein De Schorre, Boom, België'
    },
    {
        "id": 11,
        "slug": 'intents',
        "name": 'Intents',
        "datum": '27-29/05/2022',
        "genres": ['Hardcore', 'Hardstyle'],
        "locatie": 'Oisterwijk, Noord-Brabant'
    },
    {
        "id": 12,
        "slug": 'supremacy',
        "name": 'Supremacy',
        "datum": '20/09/2022',
        "genres": ['Hardcore', 'Hardstyle'],
        "locatie": 'Brabanthallen, Den Bosch, Noord-Brabant'
    },
];

app.use(bodyParser.urlencoded({ extended: false }));


//middleware
app.use('/static', express.static('static'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//aangeven welke engine moet worden gebruikt voor het renderen van de templates van pagina's
app.set('view engine', 'ejs');


//route naar de homepage
app.get('/', (req, res) => {
    const title = (evenementen.name)
    res.render('home', {title, evenementen});
})

app.get('/evenementen/:evenementId/:slug', (req, res) => {
    const id = req.params.evenementId;
    const evenement = evenementen.find( element => element.id == id);
    console.log(evenementen);

    res.render('evenementdetails', {title: `Evenementdetails for ${evenement.name}`, evenement});
});

app.get('/evenementen/zoeken', (req,res) => {
    res.render('zoekevenement', {title: 'Zoek een evenement', genres});
});

app.post('/evenementen/zoeken', (req,res) => {
    let evenement = {
        slug: slug(req.body.name),
        name: req.body.name,
        datum: req.body.datum,
        genres: arrayify(req.body.genres),
        locatie: req.body.locatie
    };
console.log('Evenement zoeken', evenement);
//zoeken naar evenement
evenementen.push(evenement);
//pagina renderen
const title = "Resultaten voor evenementen zijn geladen";
res.render('resultaten', {title, evenementen})
});

app.get('/voorkeuren', (req, res) => {
    res.render('voorkeuren')
})

app.post('/voorkeuren', (req, res) => {

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
    console.error("Error 404: page not found");
    res.status(404).render('404', 'Error 404: Sorry!, Page Not Found!')
});

//luisteren naar een port
app.listen(port, () => {
    console.log('Server started on port 3000')
});




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