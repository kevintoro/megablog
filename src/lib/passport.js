const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { helpers } = require('./helpers');
const {connect} = require('../util/database');

passport.use('local.signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, async (req, username, password, done) => {
  password = await helpers.encryptPassword(password);
  console.log(req.body);
  return done(null, null);
}))

passport.use('local.login', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true
}, async (req, username, password, done) => {
  const pool = await connect();
  let result = await pool.execute('SELECT * FROM users WHERE email = ?', [username]);
  console.log(result);
}));

passport.serializeUser((usr, done) => {
  done(null, usr.id);
});

passport.deserializeUser(async (id, done) => {
  const result = await Admin.findOne({
    raw: true,
    where: { id: id }
  });
  done(null, result);
});