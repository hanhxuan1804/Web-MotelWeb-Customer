const passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

const bcrypt=require("bcrypt");
const account=require("../server/model/account");

 passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
  },
 async function(username, password, done) {
   try{
    const user = await account.findOne({ email: username, archived: false }).lean();
    if (!user) {
      return done(null, false, { message: 'Incorrect username.' });
    }
    if (!validPassword(user,password)) {
      return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, user);
   }
   catch(err)  { return done(err); }
  },
));

passport.serializeUser(function(user, done) {
  done(null,{id : user._id, username: user.email});
});

passport.deserializeUser(function(user, done) {
  return done(null, user);
});

async function validPassword(user,password){
  const hashPassword= await bcrypt.hash(password, 10);
  return user.password === hashPassword;
}

module.exports = passport;
