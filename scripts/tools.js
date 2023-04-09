function quaternionToEuler(x, y, z, w) {
  var yaw = Math.atan2(2 * (w * z + x * y), 1 - 2 * (y * y + z * z));
  var pitch = Math.asin(2 * (w * y - z * x));
  var roll = Math.atan2(2 * (w * x + y * z), 1 - 2 * (x * x + y * y));
  
  // Converter os ângulos de radianos para graus
  yaw = yaw * 180 / Math.PI;
  pitch = pitch * 180 / Math.PI;
  roll = roll * 180 / Math.PI;
  
  return {yaw: yaw, pitch: pitch, roll: roll};
}
