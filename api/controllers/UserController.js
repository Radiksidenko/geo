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
        User.findOne({email: req.param('email')}, function (err, user) {
            if (err) {
                res.negotiate(err);
            }
            if (!user) {
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

                                    return res.redirect('/');
                                })
                            }
                        })
                    }
                })
            } else {
                return res.redirect('/');
            }
        });
    },

    login: function (req, res) {
        console.log(req.body);
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


                        return res.json({"id": user.id, "name": user.name, "email": user.email});
                        //return res.redirect('/dashboard' );
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
    },
    upload_photo_user: function (req, res) {
        const path = require('path');
        if (!req.session.me) {
            console.log("error  -> UserController.js -> upload_photo");
        } else {
            req.file('avatar').upload({
                    dirname: require('path').resolve(sails.config.appPath, 'assets' + path.sep + 'images' + path.sep + 'photo')
                },
                function (err, files) {
                    if (err)
                        return res.serverError(err);

                    var gravatarUrl = 'images/photo/' + files[0].fd.split(path.sep).pop();


                    User.update({id: req.session.me}, {gravatarUrl: gravatarUrl}).exec(function afterwards(err, updated) {

                        if (err) {
                            // handle error here- e.g. `res.serverError(err);`
                            return;
                        }
                        console.log('Updated user to have name ' + updated[0].id);
                    });
                    return "ok";
                }
            );

        }
    }

}
