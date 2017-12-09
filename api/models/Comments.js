module.exports = {
    schema: true,
    connection: 'mainMySQL',
   // migrate: 'drop',
    attributes: {
        owner: {
            type: 'int'
        },
        point:{
            type: 'int'
        },
        comments:{
            type: 'string',
        },
        type: {
            type: 'string',
            required: true
        }
    }
};

