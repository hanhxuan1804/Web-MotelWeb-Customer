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