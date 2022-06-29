const { MongoClient } = require('mongodb');

let uri = 'mongodb+srv://adminFestifinder:admin1234@projectcluster.bqqur.mongodb.net/?retryWrites=true&w=majority';

// const client = new MongoClient(uri);

// let dbConnection

// async function main() {
//     try {
//         await client.connect();

//         await listDatabases(client);
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }

// main().catch(console.error);

// async function listDatabases(client){
//     databasesList = await client.db().admin().listDatabases();
 
//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };

module.exports = {
    dbConnect: (cb) => {
        MongoClient.connect(uri)
            .then((client) => {
                dbConnection = client.db()
                return cb()
            })
            .catch(err => {
                console.error("Error 404: page not found");
                res.status(404).render('404', 'Error 404: Sorry!, Page Not Found!')
                return cb(err)
            })
    },
    dbGet: () => dbConnection
};