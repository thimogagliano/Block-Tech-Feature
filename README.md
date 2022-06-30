# FestiFinder
![festifinder-home](https://user-images.githubusercontent.com/94388546/176566208-7f6c7ce9-64fb-4617-9a7a-b2fe6c68b870.jpg)

Dit is mijn repository voor Project-Tech. Hierbij krijg ik de opdracht om een matching applicatie te maken. In deze matching applicatie moet een feature worden verwerkt door middel van front-end en back-end. 

## Concept
Het concept wat ik bij Project-Tech heb opgesteld bestaat uit het matchen van voorkeuren van gebruikers met festivals & evenementen voor de gebruiker. Via de volgende link naar de wiki is hier meer over te lezen: [Ideas & Concept](https://github.com/thimogagliano/Block-Tech-Feature/wiki/Ideas-&-Concept)

## Code of conduct
[CODE_OF_CONDUCT](https://github.com/thimogagliano/Block-Tech-Feature/blob/main/CODE_OF_CONDUCT.md)

## Installation
Volg de onderstaande stappen voor de installatie van de repository

### Git
Zorg ervoor dat git werkend is op je computer.

* Github Desktop
GitHub Desktop is een GUI versie van git waarmee je een visuele weergave krijgt van wat je met git kan en waarbij git automatisch wordt geïnstalleerd. Leer meer via de volgende link: [GitHub Desktop](https://desktop.github.com/)

* Git voor Windows
Volg de volgende link om git te installeren voor Windows: [Git Windows](https://gitforwindows.org/)
Controleer in de terminal of git goed is geïnstalleerd:
<code>$git version</code>

* Git voor MacOs
De meeste MacOs device hebben al git, activeer het in de terminal met:
<code>$git version</code>
Installeer het anders via deze link: [Git MacOs](https://sourceforge.net/projects/git-osx-installer/files/git-2.23.0-intel-universal-mavericks.dmg/download?use_mirror=autoselect)
Controleer in de terminal of git goed is geïnstalleerd:
<code>$git version</code>

* Git voor Linux
Installeer git door in de terminal van Ubuntu/Debian het volgende te plaatsen:
<code>sudo apt-get install git-all</code>

### Clonen repository
Om de repository lokaal te clonen naar je device kun je het volgende doen.

* GitHub Desktop
Navigeer naar de GitHub Pagina van de repository. Navigeer naar het kopje '<>code'. Klik rechtsboven op het groene knopje 'code'. Selecteer 'Open with GitHub Desktop'.

* Terminal
Je kunt de repository ook clonen door het volgende in de terminal te plaatsen:
<code>$git clone https://github.com/thimogagliano/Block-Tech-Feature.git</code>

### Packages
voor het installeren van packages gebruik je het volgende in de terminal met daarachter de naam van de package van [npm](https://www.npmjs.com/)
<code>$npm install</code>

### Code draaien
* Developer
<code>$npm run dev</code>

* Productie
<code>$npm start</code>

## License
This project is [MIT](https://github.com/thimogagliano/Block-Tech-Feature/blob/main/LICENSE.md) licensed.


## Geraadpleegde bronnen
Hieronder zijn de geraadpleegde bronnen te zien bij het maken van de applicatie:
* Voor het maken van static files
  * https://expressjs.com/en/starter/static-files.html
* Voor het toevoegen van een error handler in de server.js met behulp van express
  * https://expressjs.com/en/guide/error-handling.html
  * https://www.youtube.com/watch?v=jqnYt6jCrOQ
* Express routing
  * https://expressjs.com/en/guide/using-middleware.html
  * http://expressjs.com/en/guide/routing.html
* Voor het gebruiken van de templating engine van pug
  * https://pugjs.org/api/getting-started.html
* Voor het gebruiken van een templating engine met epress.js
  * http://expressjs.com/en/guide/using-template-engines.html
  * https://www.youtube.com/watch?v=DpkbM1PD9Eo
  * https://levelup.gitconnected.com/render-dynamic-content-in-nodejs-using-templates-a58cae681148
  * https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application#step-1-configuring-with-server-js
* MongoDB
  * https://www.mongodb.com/docs/
  * https://www.youtube.com/watch?v=fbYExfeFsI0
  * https://www.mongodb.com/docs/guides/crud/read_queries/
  * https://www.youtube.com/watch?v=ExcRbA7fy_A&list=PL4cUxeGkcC9h77dJ-QJlwGlZlTd4ecZOA
  * https://www.youtube.com/watch?v=bhiEJW5poHU
* Heroku
  * https://dashboard.heroku.com/apps
  * https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up
* Third party API
  * https://open-meteo.com/en/docs#api_form
  * https://www.sitepoint.com/understanding-module-exports-exports-node-js/
  * https://redwoodjs.com/docs/how-to/using-a-third-party-api
