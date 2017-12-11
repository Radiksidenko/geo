/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


    point: function (req, res) {
        console.log('point');
        Point.create({
            x: req.param('x'),
            y: req.param('y'),
            lable: req.param('lable'),
            name: req.param('name'),
            type: 'public',
            owner: req.session.me
        },
            function pointCreated(err, point) {
            if (err) {
                console.log('Error: ' + err);
                return res.negotiate(err);
            }

            console.log('point Added');
            //sails.sockets.broadcast('funSockets', 'hello', point);
            return res.json(point);
        })
    },
    privatePoint: function (req, res) {
        console.log('point');

        Point.create({

            x: req.param('x'),
            y: req.param('y'),
            lable: req.param('lable'),
            name: req.param('name'),
            type: 'private',
            owner: req.session.me
        }, function pointCreated(err,point) {
            if (err) {
                console.log('Error: ' + err);
                return res.negotiate(err);
            }
            console.log('private point Added');

            return res.json(point);
        })
    },

    getPoint: function (req, res) {
        var firstQuery = {
            where: {type: 'public'},
            select: ['x', 'y', 'lable', 'name', 'id', 'owner']
        };
        Point.find(firstQuery, function (err, point) {
            if (err) {
                res.negotiate(err);
            }
            sails.sockets.join(req, 'PointRoom');
            sails.sockets.broadcast('PointRoom', 'allPoint', point);
            return res.json(point);
        })


    },
    getMyPrivatePoint: function (req, res) {

        if (!req.session.me) {
            console.log('You are NOT logged in');
            return res.view('login');
        } else {


            var firstQuery = {
                where: {type: 'private', owner: req.session.me},
                select: ['x', 'y', 'lable', 'name', 'id', 'owner']
            };
            Point.find(firstQuery, function (err, point) {
                if (err) {
                    res.negotiate(err);
                }

                return res.json(point);
            })
        }

    },
    getMyPublicPoint: function (req, res) {
        var firstQuery = {
            where: {type: 'public', owner: req.session.me},
            select: ['x', 'y', 'lable', 'name', 'id', 'owner']
        };
        Point.find(firstQuery, function (err, point) {
            if (err) {
                console.log(err);
            }
            return res.json(point);
        })

    },


    deletePoint: function (req, res) { //TODO(Point): сделать проверку
        Point.destroy({id: req.param('id')}).exec(function (err) {
            if (err) {
                return res.negotiate(err);
            }
            return res.ok();
        });

    }


};

