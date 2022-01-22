var url = window.location.href;
if(url.indexOf('page=')==-1 || url.indexOf('page=1')>-1){
  document.getElementById('Prev_button').style.display = "none"
}

function CheckValid() {
    if(fullname.value.length==0||
        password.value.length==0||phone.value.length==0||
        idCard.value.length==0||email.value.length==0)
    alert("Don't leave any blank box");
    else
    alert("Update successful you will need to log in your account again");
  };