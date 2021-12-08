const bcrypt=require("bcrypt");

const account=require("../../server/model/account");

exports.signin = (Email, Password) =>{

}

exports.signup = async (Email, Password, Username) => {
    const acc = await account.findOne({ email: Email }).lean();
    if(acc){
        throw new Error("Email already registered");
    }
    else{
        const hashPassword= await bcrypt.hash(Password, 10)
        await account.create({ email: Email, password: hashPassword, username: Username});
        return account.findOne({ email: Email }).lean();
    }
}