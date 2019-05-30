	let change = () =>
{
  var x= document.getElementById("img");
  var elem = document.getElementById("myButton1");
    if (elem.value=="Subscribe") { elem.value = "UnSubscribe",elem.classList.add("btn1"); 
      alert("subscribed");
      x.style.display="inline";

        
              }

    else {elem.value = "Subscribe",elem.classList.remove("btn1");alert("UnSubscribed");
            x.style.display="none";
                

  }
}

let arata_ascunde =(button) => {
   var x = $('#showhide');
   $(button).find('i').remove();
   if ($(button).text().trim() == 'notify') {
     $(button).html($('<i/>',{class:'fa fa-bell-slash'})).append('no notify');
     //x.fadeIn();
     alert("notification enabeled");
    }
    else {
      $(button).html($('<i/>',{class:'fa fa-bell'})).append('notify');
      //x.fadeOut();
      alert("notification disabled");
    }
}
