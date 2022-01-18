const serviceService=require("./serviceModel/serviceService")

exports.list= async (req,res)=>{
  const services= await serviceService.list();
  res.render('../components/services/serviceView/screen' , { items:services });
}
