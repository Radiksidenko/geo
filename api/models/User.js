
module.exports = {
    schema: true,
    connection: 'mainMySQL',

  attributes: {
  	name: {
  		type:'string',
  		required: true
  	},
  	email:{
  		type:'string',
  		required: true,
  		unique: true
  	},
  	password:{
  		type:'string',
  		required: true
  	},
  	lastLoggedIn:{
  		type:'date',
  		required: true,
  		defaultsTo: new Date(0)
  	},
  	gravatarUrl:{
  		type:'string'
  	}
  }
};

