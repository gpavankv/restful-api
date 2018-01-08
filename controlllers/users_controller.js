const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


module.exports = {

    test(req, res) {
      console.log(req.connection);
      res.send({ message: 'Test Successful!'});
    },

    createUser(req, res, next) {
        const userProps = req.body;
        bcrypt.genSalt(16).then((salt) => {
            bcrypt.hash(userProps.password, salt)
                .then((hash) => {
                    console.log(hash);
                    userProps.password = hash;
                    User.create(userProps)
                        .then(() => res.status(201).send({ message: 'User created' }))
                        .catch(next);
                }).catch(err => console.log(err));
        }).catch(err => console.log(err));
    },

    verifyUser(req, res, next) {
        const userDetails = req.body;
        User.findOne({ email: userDetails.email })
            .then((user) => {
                bcrypt.compare(userDetails.password, user.password)
                    .then(result => {
                        if( result === true) {
                            // res.status(200).send({ message: `${user.firstName} ${user.lastName}`});
                            let token = jwt.sign({user}, 'secret');
                            res.send({
                                message: `${user.firstName} ${user.lastName}`,
                                token: token,
                            });
                        } else {
                            res.status(401).send({ message: 'Could not authorize'});
                        }
                    }).catch(err => {
                        console.log(err);
                        res.status(401).send({ message: 'Could not authorize' });
                        next();
                    });

            }).catch(err => {
            console.log(err);
            res.status(401).send({ message: 'Could not authorize' });
            next();
        });
    }
};