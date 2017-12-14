/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


    addComments: function (req, res) {
        console.log('comments');

        Comments.create({
            owner: req.session.me,
            point: req.param('point'),
            comments: req.param('comments'),
            type: req.param('type')
        }, function pointCreated(err) {
            if (err) {
                console.log('Error: ' + err);
                return res.negotiate(err);
            }
            console.log('comments Added');

            return res.json([]);
        })
    },


    getComments: function (req, res) { //TODO(Comments): подумать над этим
        console.log('comments getComments');

        var pointId = req.param('ID');
        if(pointId) {
            Comments.find({point: pointId}, function (err, comments) {
                if (err) {
                    res.negotiate(err);
                }
                var owner = [];
                for (var i = 0; i < comments.length; i++) {
                    owner[i] = comments[i].owner;
                }
                console.log(owner);
                console.log('*********************');
                var firstQuery = {
                    where: {id: owner},
                    select: ['name', 'id']
                };
                User.find(firstQuery, function (err, user) {
                    if (err) {
                        res.negotiate(err);
                    }
                    for (let m of comments) {
                        for (u of user) {
                            if (u.id == m.owner) {
                                m['name'] = (u.name);
                            }
                        }

                    }
                    sails.sockets.join(req, 'CemmentRoom' + pointId);
                    sails.sockets.broadcast('CemmentRoom' + pointId, 'Comments', comments);
                    return res.json(comments);
                })
            })
        }else {console.log('error getComments')}
    },
    upload_photoComments: function (req, res) {
        const path = require('path');
        if (!req.session.me) {
            console.log("error  -> UserController.js -> upload_photo");
        } else {
            req.file('photo').upload({
                    dirname: sails.config.appPath + path.sep + 'assets' + path.sep + 'images' + path.sep + 'photo'

                },
                function (err, files) {
                    if (err)
                        return res.serverError(err);

                    var gravatarUrl = 'images/photo/' + files[0].fd.split(path.sep).pop();
                    console.log('*****************')
                    console.log(files)
                    console.log('*****************')

                    Comments.create({
                        owner: req.session.me,
                        point: req.param('ID'),
                        comments: gravatarUrl,
                        type: 'photo'
                    }, function pointCreated(err) {
                        console.log(req.param('point'));
                        if (err) {
                            console.log('Error: ' + err);
                            return res.negotiate(err);
                        }
                        console.log('comments Added');

                        return res.json([]);
                    });
                    return "ok";
                }
            );

        }
    }

};







