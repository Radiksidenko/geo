
module.exports = {
    schema: true,
    connection: 'mainMySQL',
    //migrate: 'drop',
    attributes: {
        name: {
            type:'string',
            required: true
        },
        surname: {
            type:'string'
        },
        gender: {
            type:'string'
        },
        date_of_birth: {
            type:'date',
            defaultsTo: new Date(0)
        },
        country: {
            type:'string'
        },
        city: {
            type:'string'
        },
        phone: {
            type:'string'
        },
        web_site: {
            type:'string'
        },
        interests: {
            type:'string'
        },
        about_myself: {
            type:'string'
        },
        role: {
            type:'string'
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

