const serviceService=require("./serviceModel/serviceService")

exports.list= async (req,res)=>{
    if(res.locals.user === undefined){
      res.redirect('/auth/login');
    }
  const services= await serviceService.list();
  res.render('../components/services/serviceView/screen' , { items:services });
}

exports.bookService= async (req,res)=>{
  const name= await req.user.username;
  const bill = await serviceService.findBill(name);
  if(bill==null)
  {
    res.redirect('/rooms');
  }
  let billPrice = bill.totalPrice;
  let billServices = bill.serviceName;
  let serviceName = req.params.serviceName;
  const service =  await serviceService.findOne(serviceName);
  const price = service.price;
  billPrice= billPrice + price;
  billServices.push(serviceName);
  const result = await serviceService.updateBill(name,billPrice,billServices);
  res.render('../components/services/serviceView/doneScreen');
}
