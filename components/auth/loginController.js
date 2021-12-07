const authService=require('./authService')
exports.login = async (req, res) => {

  res.render('login',{wrongLogin: req.query.wrongLogin !== undefined});
  //res.render('./loginView/login',);
}
exports.signup = async (req, res) =>{
  const {email, password, username} =req.body;
  try{
    if(!email || !password){
      res.render('login');
    }
    else{
      const account = await authService.signup(email,  password, username);
      console.log(account);
      res.redirect('/myaccount');
    }
  }catch(Error){
    res.render('Error');
  }
}