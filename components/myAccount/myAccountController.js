const userService = require("./userService")

exports.detail = async (req, res) =>{
    try{
      let userID = req.params.userID;
      const user = await userService.detail(userID);
      res.render('../components/myAccount/view/accountView' , { user: user });
    }
    catch (error) {
      res.render('error',  { message: '404' });
    }
}

exports.editAccount = async (req,res) =>{
    try{
      let userID = req.params.userID;
      const user = await userService.detail(userID);
      res.render('../components/myAccount/view/editAccountView' , { user: user });
    }
    catch(error){
      res.render('error',  { message: '404' });
    }
}

exports.myaccountUpdate = async (req,res)=>{
  let userID = req.params.userID;
  const item = {
    // username: req.body.name,
    fullname: req.body.fullname,
    password: req.body.password,
    phoneNumber: req.body.phone,
    idCard: req.body.idCard,
    // date:req.body.date,
    gender: req.body.gender,
    email: req.body.email,
  };
  if(item.fullname==="")
  {
    res.redirect('/myAccount/view/editAccountView');
  }else{
    const account = await userService.editAccount(item,userID);
    res.redirect('/auth/logout');
  }
}