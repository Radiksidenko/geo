module.exports = {
    schema: true,
    connection: 'mainMySQL',
    //migrate: 'drop',
    attributes: {
        x: {
            type: 'float',
            required: true
        },
        y: {
            type: 'float',
            required: true
        },
        lable: {
            type: 'string',
            required: true
        },
        name: {
            type: 'string',
            required: true
        },
        owner:{
            type: 'int',
        },
        type:{
            type: 'string',
            required: true
        }
    }
};

