/**
 * ChatController
 *
 * @description :: Server-side logic for managing chats
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	addConv: function(req, res) {
		var data = req.params.all();

		if(req.isSocket && req.method ==='POST') {
			Chat.create(data)
			.then(function(data){
				console.log(data.nickname + ' posted ' + '"' + data.message + '"');
				Chat
				.publishCreate(data);
			})
			.error(function(err){
				console.log(err);
			});
		}

		else if(req.isSocket) {
			Chat.watch(req.socket);
			console.log('User subscribed to ' + req.socket.id);
		}
	},
    messages: function(req, res) {
        var firstQuery = {
            where: {id: '1'}
        };
        Chat.find(function (err, chat) {
            if (err) {
                res.negotiate(err);
            }
		return res.json(chat);
        })
	}
};
