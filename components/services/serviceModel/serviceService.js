const service = require("../../../server/model/service")
const bill = require("../../../server/model/bill")

exports.list = () =>{
    let result=service.find({archived: false});
    return result;
}

exports.findBill = (id) =>{
    let result=bill.findOne({customerEmail: id,solved: false});
    return result;
}

exports.findOne = (id) =>{
    let result=service.findOne({name: id,archived: false});
    return result;
}

exports.updateBill = (name,billPrice,billServices) =>{
    bill.findOneAndUpdate({customerEmail: name, solved: false},{$set: {totalPrice: billPrice, serviceName: billServices}},{upsert: false}, function(err, doc) {
    if (err) return res.send(500, {error: err});
    result=1;
    return result;
  })
}
