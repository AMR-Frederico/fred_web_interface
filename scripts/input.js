const botaoPrintar_l_p = document.getElementById("botao-linear_p");
botaoPrintar_l_p.addEventListener("click", function() {
  const inputValor = document.getElementById("input-valor_lp");
  const valor = inputValor.value;
  console.log(valor);

  
  var message = new ROSLIB.Message({
    data: parseFloat(valor)
  })

  var topic = new ROSLIB.Topic({
    ros: ros,
    name: "/control/position/setup/linear/kp",
    messageType: "std_msgs/Float32"
  })

  topic.publish(message);
});

const botaoPrintar_l_i = document.getElementById("botao-linear_i");
botaoPrintar_l_i.addEventListener("click", function() {
  const inputValor = document.getElementById("input-valor_li");
  const valor = inputValor.value;
  console.log(valor);

  
  var message = new ROSLIB.Message({
    data: parseFloat(valor)
  })

  var topic = new ROSLIB.Topic({
    ros: ros,
    name: "/control/position/setup/linear/ki",
    messageType: "std_msgs/Float32"
  })

  topic.publish(message);
});

const botaoPrintar_l_d = document.getElementById("botao-linear_d");
botaoPrintar_l_d.addEventListener("click", function() {
  const inputValor = document.getElementById("input-valor_ld");
  const valor = inputValor.value;
  console.log(valor);

  
  var message = new ROSLIB.Message({
    data: parseFloat(valor)
  })

  var topic = new ROSLIB.Topic({
    ros: ros,
    name: "/control/position/setup/linear/kd",
    messageType: "std_msgs/Float32"
  })

  topic.publish(message);
});

const botaoPrintar_a_p = document.getElementById("botao-angular_p");
botaoPrintar_a_p.addEventListener("click", function() {
  const inputValor = document.getElementById("input-valor_ap");
  const valor = inputValor.value;
  console.log(valor);

  
  var message = new ROSLIB.Message({
    data: parseFloat(valor)
  })

  var topic = new ROSLIB.Topic({
    ros: ros,
    name: "/control/position/setup/angular/kp",
    messageType: "std_msgs/Float32"
  })

  topic.publish(message);
});

const botaoPrintar_a_i = document.getElementById("botao-angular_i");
botaoPrintar_a_i.addEventListener("click", function() {
  const inputValor = document.getElementById("input-valor_ai");
  const valor = inputValor.value;
  console.log(valor);

  
  var message = new ROSLIB.Message({
    data: parseFloat(valor)
  })

  var topic = new ROSLIB.Topic({
    ros: ros,
    name: "/control/position/setup/angular/ki",
    messageType: "std_msgs/Float32"
  })

  topic.publish(message);
});

const botaoPrintar_a_d = document.getElementById("botao-angular_d");
botaoPrintar_a_d.addEventListener("click", function() {
  const inputValor = document.getElementById("input-valor_ad");
  const valor = inputValor.value;
  console.log(valor);

  
  var message = new ROSLIB.Message({
    data: parseFloat(valor)
  })

  var topic = new ROSLIB.Topic({
    ros: ros,
    name: "/control/position/setup/angular/kd",
    messageType: "std_msgs/Float32"
  })

  topic.publish(message);
});