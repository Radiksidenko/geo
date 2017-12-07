

module.exports = {
    connection: 'localDiskDb',
   // migrate: 'drop',
attributes: {
    nickname: {
      type: 'string',
      required: true
    },
    message: {
      type: 'string',
      required: true
    }
  }
};
