const passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

const account=require("../server/model/account");

 passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
  },
 async function(username, password, done) {
   try{
    const user = await account.findOne({ email: username }).lean();
    if (!user) {
      return done(null, false, { message: 'Incorrect username.' });
    }
    if (!validPassword(user,password)) {
      return done(null, false, { message: 'Incorrect password.' });
    }
    console.log(user);
    return done(null, user);
   }
   catch(err)  { return done(err); }
  },
));

passport.serializeUser(function(user, done) {
  done(null,{id : user._id, username: user.username});
});

passport.deserializeUser(function(user, done) {
  return done(null, user);
});

function validPassword(user,password){
  return user.password === password;
}

module.exports = passport;