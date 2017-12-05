module.exports.routes = {

    'GET /': {view: 'login'},
    'GET /info': {view: 'info'},
    'GET /test': {view: 'test'},
    'GET /signup': {view: 'signup'},
    'GET /dashboard': 'DashController.checkUser',
    'GET /getuser': 'DashController.getUser_by_id',
    'GET /getuser_me': 'DashController.getUser',
    'GET /logout': 'UserController.logout',
    'POST /point': 'PointController.point',
    'GET /get_point': 'PointController.getPoint',

    'POST /signup': 'UserController.signup',
    'POST /update': 'UserController.update',
    'POST /login': 'UserController.login',

    'POST /private_point': 'PointController.privatePoint',
    'GET /get_my_point': 'PointController.getMyPrivatePoint',
    'GET /get_My_Public_point': 'PointController.getMyPublicPoint',

    'POST /deletePoint' :'PointController.deletePoint',


    'GET /user':  function(req, res) { return res.send('hello!'); }

};
