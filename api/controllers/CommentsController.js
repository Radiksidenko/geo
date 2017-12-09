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


        Comments.find({point: req.param('ID')}, function (err, comments) {
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
                return res.json(comments);
            })
        })
    }
};







