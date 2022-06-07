module.exports = {
    //Paramètres permettant la connexion MYSQL
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "hanmar_db",
    dialect: "mysql",
    // pool permet la configuration du pool de connexion Séquelize
    /* max : nombre de connexion dans le pool; min : nombre minimum  dans le pool; 
    idle: temps maximum, en milliseconde en pendant lequel une connexion peut être inactive avant d'être libérée, 
    acquire: temps maximum, le pool essaiera d'obtenir une connexion avant de lancer une erreur */
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }

};