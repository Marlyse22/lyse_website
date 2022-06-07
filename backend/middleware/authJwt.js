/* Pour traiter l'authentification et l'autorisation, nous avons ces fonctions :
    - vérifier si elle tokenest fournie, légale ou non. Nous obtenons le jeton de x-access-token des en-têtes HTTP, puis utilisons la fonction de jsonwebtokenverify() .
    - vérifier si rolesl'utilisateur contient le rôle requis ou non. */

    const jwt = require("jsonwebtoken");
    const config = require("../config/auth.config.js");
const { user } = require("../models");
    const db = require("../models");
    const User = db.user;
    verifyToken = (req, res, next) => {
        let token = req.headers["x-access-token"];
        if(!token) {
            return res.status(403).send({
                message: "No token provided!"
            });
        }
        jwt.verify(token, config.secret, (err, decoded) => {
            if(err) {
                return res.status(401).send({
                    message: "Unauthorized!"
                });
            }
            req.userId = decoded.id;
            next();
        });
    };
    isAdmin = (req, res, next) => {
        User.findByPk(req.userId).then(user => {
            user.getRoles().then(roles => {
                for (let i = 0; i < roles.length; i++) {
                   if (roles[i].name === "admin") {
                        next();
                        return;
                   }
                }
                res.status(403).send({
                    message: "Require Admin Role!"
                });
                return;
            });
        });
    };
    isModerator = (res, req, next)  => {
        User.findByPk(req.userId).then(user  => {
            user.getRole().then(roles  => {
                for (let i = 0; i < roles.length; i++) {
                    if (roles[i].name === "moderator") {
                        next();
                        return;
                    }
                }
                res.status(403).send({
                    message: "Require Moderator Role!"
                });
            });
        });
    };
    isModeratorOrAdmin = (req, res, next) => {
        User.findByPk(req.userId).then(roles => {
            user.getRoles().then(roles => {
                for (let i = 0; i < roles.length; i++) {
                    if (roles[i].name === "moderator") {
                        next();
                        return;  
                    }
                    if (roles[i].name === "admin") {
                        next();
                        return;
                    }
                }
                res.status(403).send({
                    message: "Require Moderator or Admin Role!"
                })
            })
        })
    };


    const authJwt = {
        verifyToken: verifyToken,
        isAdmin: isAdmin,
        isModerator: isModerator,
        isModeratorOrAdmin:  isModeratorOrAdmin

    };
    module.exports = authJwt;