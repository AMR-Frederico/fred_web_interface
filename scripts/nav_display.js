function ros_connected(){
  if(connected_to_ros){
   $("#ros_conected").attr("src","midia/conected_green.png");
  }else{
   $("#ros_conected").attr("src","midia/conected_red.png");
   }
   
}

function controler_connected(){
     controler_conected.subscribe(function(message) {
    if(message.data){
       $("#controler_conected").attr("src","midia/console_green.png");
    }else{
        $("#controler_conected").attr("src","midia/console _red.png");
    }
    });
}

