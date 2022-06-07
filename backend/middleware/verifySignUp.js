/**
 * Ici on va verifier une action d'inscription grâce à 2 fonctions :
 * -verifier si le username est en double ou non
 * -verifier si roles la demande existe ou non
 */

const db = require("../models");
const ROLES = db.ROLES;

const User = db.user;
checkDuplicateUsernameOrEmail = (req, res, next) => {
    //Username
    User.findOne({
        where:{
            username: req.body.username
        }
    }).then( user => {
        if(user){
            res.status(400).send({
                message: "Echec! Le username existe déja dans la base"
        });
        return;
    }
    //Email
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if (user) {
            res.status(400).send({
                message: "Failed! Email existe déja dans la base de données"
            });
            return;
        }
        next();
    });

    });
};
checkRolesExisted = (req, res, next) => {
    if(req.body.roles){
        for (let i = 0; i < req.body.roles.length; i++) {

            if (!ROLES.includes(req.body.roles[i])) {
                res.status(400).send({
                    message: "Failed! Le profil n'existe = " + req.body.roles[i]
                });
            }
        }
    }
    next();
};
const verifySignUp = {
    checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
    checkRolesExisted: checkRolesExisted
};
module.exports = verifySignUp;