const b = function (kg) {
  let pounds = (kg * 2.2046);
  document.getElementById('result2').value = pounds;
}
const c = (feet) => {
  let cm = (feet * 30.48);
  document.getElementById('result3').value = cm;
}
function converter(celsius, kg, feet) {
  a(celsius);
  b(kg)
  c(feet)

}
function a(celsius) {
  let fahrenheit = (celsius * 1.8) + 32;
  document.getElementById('result1').value = fahrenheit;
}