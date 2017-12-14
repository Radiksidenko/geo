/**
 * MessageController
 *
 * @description :: Server-side logic for managing Messagecontrollers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    addMessage: function (req, res) {
        console.log(req.session.me);
        console.log('***************');
        console.log(req.allParams());


        Messages.create({
            sender: req.session.me,
            recipient: req.param('recipient'),
            roomId: req.param('roomId'),
            message: req.param('message')
        }, function ChatCreated(err) {
            if (err) {
                console.log('Error: ' + err);
                return res.negotiate(err);
            }

            Messages.find({roomId: req.param('roomId')}, function (err, chat) {
                if (err) {
                    console.log(err);
                }
                console.log(chat);
                sails.sockets.broadcast('MessagesRoom' + req.param('roomId'), 'Messages', chat);

                return res.json(chat);
            });
        })
    },

    showmessages: function (req, res) {


        var firstQuery = {
            where: {roomId: req.param('ID')}
        };
        Messages.find(firstQuery, function (err, chat) {
            if (err) {
                console.log(err);
            }
            console.log(chat);
            sails.sockets.join(req, 'MessagesRoom' + req.param('ID'));
            sails.sockets.broadcast('MessagesRoom' + req.param('ID'), 'Messages', chat);

            return res.json(chat);
        })
    },


    create_room: function (req, res) {
        console.log(req.session.me);
        console.log('***************');
        //Room.findOne({sender: [req.session.me, req.param('recipient')]}, {recipient: [req.session.me, req.param('recipient')]})
        Room.create({
                sender: req.session.me,
                recipient: req.param('recipient')
            },
            function RoomCreated(err, room) {
                if (err) {
                    console.log('Error: ' + err);
                    return res.negotiate(err);
                }
                console.log("******************");
                console.log(room.id);
                User.find({id: [req.session.me, req.param('recipient')]}).exec(function (err, user) {
                    if (err) {
                        console.log('check error userListController -> trackUser -> findOne ', err);
                    }
                    console.log("******************");
                    console.log(user);

                    var room1 = user[0].room ? user[0].room : [];
                    var room2 = user[1].room ? user[1].room : [];

                    room1.push(room.id);
                    room2.push(room.id);

                    var room11 = {room: room1};
                    var room21 = {room: room2};
                    console.log("/******************/");
                    console.log("/******************/");
                    console.log(user[0].name,room11);
                    console.log("/******************/");
                    console.log("/******************/");
                    console.log(user[1].name,room21);

                    User.update({id: user[0].id}, room11).exec(function (err, updatedUser) {
                        if (err) {
                            console.log('check error userListController -> trackUser -> update ', err);
                        }
                    });
                    User.update({id:user[1].id},room21).exec(function (err, updatedUser) {
                        if (err) {
                            console.log('check error userListController -> trackUser -> update ', err);
                        }
                    });
                });

            })
    },
    getRoom: function (req, res) {
        if (!req.session.me) {
        } else {
            User.findOne({id: req.session.me}, function (err, user) {
                if (err) {
                    res.negotiate(err);
                }
                //console.log(user)
                var firstQuery = {
                    where: {id: user.room}
                };
                Room.find(firstQuery, function (err, room) {
                    if (err) {
                        res.negotiate(err);
                    }
                    var owner = [];
                    for (var i = 0; i < room.length; i++) {
                        if (room[i].sender == req.session.me) {
                            owner[i] = room[i].recipient;
                        } else {
                            owner[i] = room[i].sender;
                        }
                    }
                    console.log('*********');
                    //console.log(owner)
                    var firstQuery = {
                        where: {id: owner},
                        select: ['name', 'id']
                    };
                    User.find(firstQuery, function (err, user) {
                        if (err) {
                            res.negotiate(err);
                        }
                        for (let m of room) {
                            for (u of user) {
                                if (u.id == m.sender || u.id == m.recipient) {
                                    m['name'] = (u.name);
                                }
                            }

                        }
                        return res.json(room);
                    })

                });


            });
        }

    }
};

