const roomService=require("./roomModel/roomService")
let sortPrice = 0;
exports.list = async (req,res)=>{
  let nPerPage= 3;
  if(!isNaN(req.query.sortPrice)){
    sortPrice =parseInt(req.query.sortPrice)||0;
  };
  let {page} = req.query;
  page= Math.max(parseInt(page)||1,1);
  const rooms= await roomService.list(page, nPerPage, sortPrice);
  res.render('../components/rooms/roomView/roomList' , { rooms:rooms });
}
exports.detail = async (req, res) =>{
  try{
    let roomID = req.params.roomID;
    const room = await roomService.detail(roomID);
    console.log(room);
    res.render('../components/rooms/roomView/roomDetail' , { room: room });
  }
  catch (error) {
    res.render('error',  { message: '404' });
  }
}
