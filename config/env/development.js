

module.exports = {


    models: {
        connection: 'mainMySQL',
        //migrate: 'drop',
        //migrate: 'alter',
        migrate: 'safe'
    },
    port: 1337,
};

