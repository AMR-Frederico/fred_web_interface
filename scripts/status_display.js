function display_odom(){
  pose_odom.subscribe(function(message) {
    var precision = 3
    $("#odom_x").text( message.pose.pose.position.x.toFixed(precision));
    $("#odom_y").text( message.pose.pose.position.y.toFixed(precision));
    var x = message.pose.pose.orientation.x;
    var y = message.pose.pose.orientation.y;
    var z = message.pose.pose.orientation.z;
    var w =  message.pose.pose.orientation.w;
    // console.log(x + ":" + y + ":"+z+":"+w);
    var theta =  quaternionToEuler(x, y, z, w).yaw;
    // console.log(theta);
    $("#odom_theta").text(theta.toFixed(precision) );

    $("#odom_speed_linear").text(message.twist.twist.linear.x.toFixed(precision));
    $("#odom_speed_angular").text(message.twist.twist.angular.z.toFixed(precision));
  });
}

function display_cmd_vel(){
    cmd_vel.subscribe(function(message) {
    var precision = 3
    $("#cmd_linear").text( message.linear.x.toFixed(precision));
    $("#cmd_angular").text( message.angular.z.toFixed(precision));
  });

}