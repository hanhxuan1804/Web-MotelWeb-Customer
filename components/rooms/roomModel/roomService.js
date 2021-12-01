const room = require("../../../server/model/room")

exports.list = (pageNumber, nPerPage, option, roomType) =>{
    let result=room.find({});
    if(roomType!=0){
        result=room.find({ type: roomType})
    }
    if(option == 1){
        return result.sort({price: 1}).skip(pageNumber > 0 ? (pageNumber -1)*nPerPage : 0).limit(nPerPage);
    }
    if(option == -1){
        return result.sort({price: -1}).skip(pageNumber > 0 ? (pageNumber -1)*nPerPage : 0).limit(nPerPage);
    }
    return result.skip(pageNumber > 0 ? (pageNumber -1)*nPerPage : 0).limit(nPerPage);
}

exports.detail = (roomID) =>{
    if((room.findOne({id: roomID}))==null) throw error;
    return room.findOne({id: roomID});
}