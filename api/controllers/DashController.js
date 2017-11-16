module.exports = {

    checkUser: function (req, res) {
        if (!req.session.me) {
            console.log('You are NOT logged in');
            return res.view('login');
        } else {
            console.log('You are logged in');
            return res.view('dashboard');
        }
    },


    getUser: function (req, res) {
        if (!req.session.me) {
            return res.view('login');
        } else {


            var firstQuery = {
                where: {id: req.session.me},
                select: ['name', 'email', 'lastLoggedIn', 'gravatarUrl']
            };
            User.findOne(firstQuery, function (err, user) {
                if (err) {
                    res.negotiate(err);
                }

                return res.send(user);
            })
        }

    },


    getUser_by_id: function (req, res) {

        if (!req.param('ID')) {
            return res.view('dashboard');
        } else {
            var firstQuery = {
                where: {id: req.param('ID')},
                select: ['name', 'email', 'lastLoggedIn', 'gravatarUrl']
            };
            User.findOne(firstQuery, function (err, user) {
                if (err) {
                    res.negotiate(err);
                }
                return res.send(user);
            })
        }

    }
};

