$(document).ready(function(){
  console.log("Document ready!!!");

  ros = new ROSLIB.Ros({
    url: 'ws://' + window.location.hostname +  ':9090'
    // url: 'ws://localhost:9090'
  });
  
  ros.on('connection', function() {
    console.log('Connected to ROS Bridge server!!');
  });
  
  ros.on('error', function(error) {
    console.log('Error connecting to ROS Bridge server:', error);
  });
  
  ros.on('close', function() {
    console.log('Disconnected from ROS Bridge server.');
  });

  initializeTopics();

  display_ticks();
  display_distance();
  display_imu();

  display_odom();
  display_cmd_vel();

  display_mode();
  display_state();
  display_curent_objective();
  display_controler_bat();

});

// Variáveis globais
var ros;

// Sensors 
var sensor_ticks_left;
var sensor_ticks_right;

var sensor_imu;

var distance_left;
var distance_right;
var distance_back;

//Status 
var pose_odom;

var cmd_vel;


//Fred

var state_mode;
var current_mode;
var curent_objective;
var next_objective; 

var controler_battery ; 





function initializeTopics() {

  sensor_ticks_left = new ROSLIB.Topic({
    ros: ros,
    name: '/power/status/distance/ticks/left',
    messageType: 'std_msgs/Float32'
  });

  sensor_ticks_right = new ROSLIB.Topic({
    ros: ros,
    name: '/power/status/distance/ticks/right',
    messageType: 'std_msgs/Float32'
  });

  sensor_imu = new ROSLIB.Topic({
    ros: ros,
    name: "/sensor/orientation/imu",
    messageType: 'sensor_msgs/Imu'
  });
  

 
 distance_back = new ROSLIB.Topic({
    ros: ros,
    name: "/sensor/range/ultrasonic/back",
    messageType: 'sensor_msgs/Range'
  });
 distance_left = new ROSLIB.Topic({
    ros: ros,
    name: "/sensor/range/ultrasonic/left",
    messageType: 'sensor_msgs/Range'
  });
 distance_right = new ROSLIB.Topic({
    ros: ros,
    name: "/sensor/range/ultrasonic/right",
    messageType: 'sensor_msgs/Range'
  });




curent_objective =  new ROSLIB.Topic({
    ros: ros,
    name: "/goal_manager/goal/current",
    messageType: 'geometry_msgs/PoseStamped'
  });

state_mode = new ROSLIB.Topic({
    ros: ros,
    name: "/cmd/led_strip/color",
    messageType: 'std_msgs/Float32'
  });

current_mode =  new ROSLIB.Topic({
    ros: ros,
    name: "/machine_state/control_mode/manual",
    messageType: 'std_msgs/Bool'
  });

pose_odom =   new ROSLIB.Topic({
    ros: ros,
    name: "/odom",
    messageType: 'nav_msgs/Odometry'
  });

cmd_vel =  new ROSLIB.Topic({
    ros: ros,
    name: "/cmd_vel",
    messageType: 'geometry_msgs/Twist'
  });

  controler_battery = new ROSLIB.Topic({
    ros:ros, 
    namr:"/joy/controler/ps4/battery",
    messageType:"std_msgs/Int16"
  });
}