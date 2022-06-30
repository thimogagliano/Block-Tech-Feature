const { json } = require("body-parser");

const getData = (data) => {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=52.3738&longitude=4.8910&hourly=temperature_2m")
    .then(response => response.json())
    .then(json => console.info(json))
}

getData();

module.exports = {getData};