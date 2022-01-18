const service = require("../../../server/model/service")
const bill = require("../../../server/model/bill")

exports.list = () =>{
    let result=service.find({archived: false});
    return result;
}
