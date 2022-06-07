//importation d'express pour la construction de l'API REST
const express = require("express");
//importation de cors qui fournit un middlrware Express pour activer CORS
const cors = require("cors");
const { role } = require("./models");
const app = express();
var corsOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
//parse requests of content-type - application/json
app.use(express.json());
//parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));
//Définition une route GET pour tester
app.get("/", (req, res) => {
res.json({message: "Bienvenue dans mon application."});
});

const db = require("./backend/models");
// pour le developpement pour supprimer les tables existantes et resynchronyser
db.sequelize.sync({force: true}).then(()=> {
    console.log('Drop and Resync Db');
    initial();
});
/**
 * En production on utilise seulement sync() pour eviter la perte de données
 * db.sequelize.sync();
 */

//Configuration du port d'écoute pour les requêtes
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Le serveur tourne sur le port ${PORT}`);
});
//Initial() permet de créer 3 ligne dans la bdd
function initial() {
    Role.create({
        id: 1,
        name: "user",
        description: "Un simple utilisateur"
    });
    Role.create({
        id: 2,
        name: "moderateur",
        description: "Il se charge de faire entrer les gens"
    });
    Role.create({
        id: 2,
        name: "admin",
        description: "Il se charge de tout gerer"
    });
}