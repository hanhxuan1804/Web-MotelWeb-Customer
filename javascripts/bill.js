var url = window.location.href;
if(url.indexOf('page=')==-1 || url.indexOf('page=1')>-1){
  document.getElementById('Prev_button').style.display = "none"
}

function CheckValidBill(price) {
    if(datepicker.value.length==0||
        datepicker1.value.length==0||
        ((numAdults==0)&&(numChilds==0)))
      alert("Don't leave any blank box");
    else{
      const date1 = new Date(datepicker.value);
      const date2 = new Date(datepicker1.value);

      const diffTime = Math.abs(date2 - date1);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      const total=price*diffDays;
      ammount.value = total;
      if(total/1000000>0){
        alert("Create successful, price = " + total/1000000 + " trieu VND");
      }
      else{
        alert("Create successful, price = " + total/1000 + "nghin VND");
      }
    }
  };
