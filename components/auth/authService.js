const bcrypt=require("bcrypt");

const account=require("../../server/model/account");

exports.signup = async (Email, Password, Username) => {
    const acc = await account.findOne({ email: Email }).lean();
    if(acc){
        throw new Error("Email already registered");
    }
    else{
        const hashPassword= await bcrypt.hash(Password, 10);
        return account.create({ email: Email, password: hashPassword, username: Username});
    }
}