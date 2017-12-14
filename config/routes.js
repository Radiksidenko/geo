module.exports.routes = {

    'GET /': 'DashController.login',
    'GET /info': {view: 'info'},
    'GET /test': {view: 'test'},
    'GET /signup': {view: 'signup'},
    'GET /dashboard': 'DashController.checkUser',
    'GET /getuser': 'DashController.getUser_by_id',
    'GET /public_user': 'DashController.checkUser',

    'GET /getuser_me': 'DashController.getUser',
    'GET /logout': 'UserController.logout',
    'POST /point': 'PointController.point',
    'GET /get_point': 'PointController.getPoint',

    'POST /signup': 'UserController.signup',
    'POST /update': 'UserController.update',
    'POST /upload_photo_user': 'UserController.upload_photo_user',

    'POST /login': 'UserController.login',

    'POST /private_point': 'PointController.privatePoint',
    'GET /get_my_point': 'PointController.getMyPrivatePoint',
    'GET /get_My_Public_point': 'PointController.getMyPublicPoint',

    'POST /deletePoint' :'PointController.deletePoint',

    'GET /chat': 'DashController.checkUser',

    'GET /mails': 'MessageController.showmessages',
    'GET /room': 'MessageController.getRoom',
    'POST /chat/sent': 'MessageController.addMessage',
    'POST /create_room':'MessageController.create_room',

    'GET /user_list': 'UserController.user_list',


    'GET /profile': 'DashController.checkUser',
    'GET /users': 'DashController.checkUser',

    'POST /addComments' :'CommentsController.addComments',
    'GET /getComments': 'CommentsController.getComments',
    'POST /upload_photoComments': 'CommentsController.upload_photoComments',

    'POST /upload':'CommentsController.upload'
    //'GET /user':  function(req, res) { return res.send('hello!'); }

};
