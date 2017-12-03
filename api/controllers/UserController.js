/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    // Sign User Up

    signup: function (req, res) {
        console.log('Backend Signup');

        var Passwords = require('machinepack-passwords');

        // Encrypt Password
        Passwords.encryptPassword({
            password: req.param('password'),
            difficulty: 10,
        }).exec({
            error: function (err) {
                console.log(1);
                return res.negotiate(err);
            },
            success: function (encryptedPassword) {
                console.log(2);
                require('machinepack-gravatar').getImageUrl({
                    emailAddress: req.param('email')
                }).exec({
                    error: function (err) {
                        return res.negotiate(err);
                    },
                    success: function (gravatarUrl) {
                        // Create User
                        User.create({
                            name: req.param('name'),
                            email: req.param('email'),
                            password: encryptedPassword,
                            lastLoggedIn: new Date(),
                            gravatarUrl: gravatarUrl
                        }, function userCreated(err, newUser) {
                            if (err) {
                                console.log('Error: ' + err);
                                return res.negotiate(err);
                            }

                            //SESSION VAR

                            console.log('User Added');

                            return res.redirect('/' );;
                        })
                    }
                })
            }
        })
    },
    login: function (req, res) {
        console.log('test');
        // Validate User
        User.findOne({
                email: req.param('email')
            },
            function foundUser(err, user) {
                if (err) {
                    return res.negotiate(err);
                }
                if (!user) {
                    return res.notFound();
                }

                require('machinepack-passwords').checkPassword({
                    passwordAttempt: req.param('password'),
                    encryptedPassword: user.password
                }).exec({
                    error: function (err) {
                        console.log('Password Error');
                        return res.negotiate(err);
                    },
                    incorrect: function () {
                        console.log('Password incorrect');
                        return res.notFound();
                    },
                    success: function () {
                        req.session.me = user.id;

                        console.log('SUCCESS');
                        return res.redirect('/dashboard' );
                    }
                })
            })
    },

    logout: function (req, res) {
        User.findOne({id: req.session.me}, function (err, user) {
            if (err) {
                return res.negotiate(err);
            }
            if (!user) {
                return res.notFound();
            }

            req.session.me = null;

            return res.redirect('/');
        })
    },
    update: function (req, res) {
        var data = req.allParams();
        User.update({id: req.session.me,}, data).exec(function afterwards(err, updated) {

            if (err) {
                // handle error here- e.g. `res.serverError(err);`
                return;
            }
            console.log('Updated user to have name ' + updated[0].id);
        });
    }
};

