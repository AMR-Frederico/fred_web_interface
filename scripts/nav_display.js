function ros_connected(){
  if(connected_to_ros){
    $("#ros_conected").text("online");
    }else{
    $("#ros_conected").text("offline");
    }
}

function controler_connected(){
     current_mode.subscribe(function(message) {
    // console.log(message.data);
    if(message.data){
       $("#controler_conected").text( "Controler Connected");
    }else{
       $("#controler_conected").text( "Controler Disconected");
    } 
    });
}