



function display_ticks() {

  sensor_ticks_left.subscribe(function(message) {
    $("#left_ticks").text( message.data);
    // console.log(message.data);  
  });

  sensor_ticks_right.subscribe(function(message) {
    $("#right_ticks").text( message.data);
    // console.log(message.data);  
  });

}

function display_imu() {
  var precision = 2 ; 
  sensor_imu.subscribe(function(message) {
    var quat = message.orientation.x.toFixed(precision) + " | " + message.orientation.y.toFixed(precision) + " | " + message.orientation.z.toFixed(precision) + " | " + message.orientation.w.toFixed(precision);
    $("#imu").text(quat);
  });
}

function display_distance(){
  distance_back.subscribe(function(message) {
    $("#distance_back").text( message.range);
    // console.log(message.range);  
  });

   distance_right.subscribe(function(message) {
    $("#distance_right").text( message.range);
    // console.log(message.range);  
  });

  distance_left.subscribe(function(message) {
    $("#distance_left").text( message.range);
    // console.log(message.range);  
  });
}