const room = require("../../../server/model/room")

exports.list = (pageNumber, nPerPage, option) =>{
    if(option == 1){
        return room.find({}).sort({price: 1}).skip(pageNumber > 0 ? (pageNumber -1)*nPerPage : 0).limit(nPerPage);
    }
    if(option == -1){
        return room.find({}).sort({price: -1}).skip(pageNumber > 0 ? (pageNumber -1)*nPerPage : 0).limit(nPerPage);
    }
    return room.find({}).skip(pageNumber > 0 ? (pageNumber -1)*nPerPage : 0).limit(nPerPage);
}

exports.detail = (roomID) =>{
    if((room.findOne({id: roomID}))==null) throw error;
    return room.findOne({id: roomID});
}