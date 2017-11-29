/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    // Sign User Up

    point: function (req, res) {
        console.log('point');

        Point.create({

            x: req.param('x'),
            y: req.param('y'),
            lable: req.param('lable'),
            name: req.param('name')
        }, function pointCreated(err) {
            if (err) {
                console.log('Error: ' + err);
                return res.negotiate(err);
            }

            //SESSION VAR

            console.log('point Added');

            return res.json([]);
        })
    },
    getPoint: function (req, res) {
        var firstQuery = {
            select: ['x', 'y', 'lable', 'name','id']
        };
        Point.find(firstQuery,function (err, point) {
            if (err) {
                res.negotiate(err);
            }

            return res.json(point);
        })

    },

    getMyPoint: function (req, res) {
        var firstQuery = {
            where: {owner: req.session.me},
            select: ['x', 'y', 'lable', 'name','id']
        };
        PrivatPoint.find(firstQuery,function (err, point) {
            if (err) {
                res.negotiate(err);
            }

            return res.json(point);
        })

    },
    privatePoint: function (req, res) {
        console.log('point');

        PrivatPoint.create({

            x: req.param('x'),
            y: req.param('y'),
            lable: req.param('lable'),
            name: req.param('name'),
            owner: req.session.me
        }, function pointCreated(err) {
            if (err) {
                console.log('Error: ' + err);
                return res.negotiate(err);
            }
            console.log('private point Added');

            return res.json([]);
        })
    },

    deletePoint: function (req,res) {
       Point.destroy({id: req.param('id')}).exec(function (err){
            if (err) {
                return res.negotiate(err);
            }
            return res.ok();
        });

    }



};

