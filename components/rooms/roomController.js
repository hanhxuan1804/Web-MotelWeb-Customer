const roomService=require("./roomModel/roomService")

exports.list = async (req,res)=>{
  let nPerPage= 3;
  let sortPrice = 0;
  let roomType =0;
  if(!isNaN(req.query.sortPrice)){
    sortPrice =parseInt(req.query.sortPrice)||0;
  }
  else{sortPrice = 0};
  if(!isNaN(req.query.roomType)){
    roomType =parseInt(req.query.roomType)||0;
  }
  else{roomType =0;};
  let {page} = req.query;
  page= Math.max(parseInt(page)||1,1);
  const rooms= await roomService.list(page, nPerPage, sortPrice, roomType);
  res.render('../components/rooms/roomView/roomList' , { rooms:rooms , type: roomType});
}

exports.detail = async (req, res) =>{
  try{
    let roomID = req.params.roomID;
    const room = await roomService.detail(roomID);
    res.render('../components/rooms/roomView/roomDetail' , { room: room });
  }
  catch (error) {
    res.render('error',  { message: '404' });
  }
}
