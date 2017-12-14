

module.exports = {
    schema: true,
    connection: 'mainMySQL',
 // migrate: 'drop',
attributes: {
    sender: {
        type: 'int',
        required: true
    },
    recipient:{
        type: 'int',
        required: true
    }
  }
};
