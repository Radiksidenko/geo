module.exports.routes = {

    'GET /': {view: 'login'},
    'GET /test': {view: 'test'},
    'GET /signup': {view: 'signup'},
    'GET /dashboard': 'DashController.checkUser',
    'GET /getuser': 'DashController.getUser_by_id',
    'GET /getuser_me': 'DashController.getUser',
    'GET /logout': 'UserController.logout',
    'POST /signup': 'UserController.signup',
    'POST /update': 'UserController.update',
    'PUT /login': 'UserController.login'

};
