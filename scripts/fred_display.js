function display_curent_objective(){
  curent_objective.subscribe(function(message) {
    var pose ="|x : " + message.pose.position.x + " |y : " + message.pose.position.y + " |θ : " + 0;
    $("#current_objective").text( pose);
      
  });
}

function display_mode(){

    current_mode.subscribe(function(message) {
    // console.log(message.data);
    if(message.data){
       $("#mode").text( "Manual");
    }else{
       $("#mode").text( "Auto");
    } 
  });

}

function display_state(){
  let states = {0:"IDLE",
                1:"WAITING",
                2:"EMERGENCY_BREAK",
                3:"AT_GOAL",
                4:"MOVING_TO_GOAL",
                5:"WITH_GOAL",
                6:"MISSION_COMPLETED",
                200:"EMERGENCY_BREAK",
                300:"MISSION_COMPLETE"
  };

  state_mode.subscribe(function(message) {
    $("#state").text(states[message.data]);
    // console.log(message.data);
   
  });

}

function display_controler_bat(){
  controler_battery.subscribe(function(message) {
    console.log(message.data);    
    $("#controler_bat").text( (message.data)*10 + "%");
      
  });
}