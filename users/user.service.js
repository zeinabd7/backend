const config = require('./config.json');
const jwt = require('jsonwebtoken');
const users = [{ login: 'test', password: 'test'}];

module.exports = {
    authenticate 
};

async function authenticate({ login, password }) {
    const user = users.find(u => u.login === login && u.password === password);

    if (!user) throw 'login or password is incorrect';
   

    // create a jwt token that is valid for 7 days
    const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: '7d' });

    return {  user,token};
}

