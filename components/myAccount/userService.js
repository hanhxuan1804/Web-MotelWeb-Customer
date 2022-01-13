const user = require("../../server/model/account")

exports.detail = (userID) =>{
    if((user.findOne({id: userID}))==null) throw error;
    return user.findOne({id: userID});
}