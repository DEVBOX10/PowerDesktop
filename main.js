window.onloadend = function(){
   
}

function Window_OnResize(){
  var width = document.documentElement.clientWidth;
  
  if (width <= 600){
    document.getElementById("menu_nav").style.visibility = "collapse";
  }
  else{
    document.getElementById("menu_nav").style.visibility = "visible";
  }
}