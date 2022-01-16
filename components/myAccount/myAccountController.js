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
    // res.render('../components/myAccount/view/accountView');
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