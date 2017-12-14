// module.exports.connections = {
//     mainMySQL: {
//         adapter: 'sails-mysql',
//         host: 'localhost',
//         user: 'point',
//         password: '123321',
//         database: 'point',
//         timezone: 'utc'
//     },
//
//
// };

module.exports.connections = {
    mainMySQL: {
        adapter: 'sails-mysql',
        host: 'tk3mehkfmmrhjg0b.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'dyoy7i31u259xtre',
        password: 'eaq3a63qv11hmpz3',
        database: 'dwb2pm8d9a5cvmiy',
        timezone: 'utc'
    },
    localDiskDb: {
        adapter: 'sails-disk'
    }

};
