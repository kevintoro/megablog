const {createPool} = require('mysql2/promise');

async function connect() {
  return createPool({
    uri: 'mysql://b187abc696964d:66daa4d0@us-cdbr-east-03.cleardb.com/heroku_d730e8757c0705d'
  });
}

module.exports = {connect};