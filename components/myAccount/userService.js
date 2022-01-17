const bcrypt=require("bcrypt");
const user = require("../../server/model/account")

exports.detail = (userID) =>{
    try {
        const _user = user.findOne({_id: userID});
        if(!_user) throw error;
        return _user;
    } catch (error) {
        console.log(error.message);
        throw error;
    }   
}

exports.editAccount = async (item,id) =>{
    const hashPassword= await bcrypt.hash(item.password, 10);
    user.findOneAndUpdate({_id: id},{$set: {
        name: item.fullname, password: hashPassword, phoneNumber: item.phoneNumber, 
        gender: item.gender, email: item.email, idCard: item.idCard}},
        {upsert: false}, function(err, doc) {
    if (err) return res.send(500, {error: err});
    return 1;
  });
}