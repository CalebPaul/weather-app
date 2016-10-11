var Weather = require('./../js/weather.js').weatherModule;

$(document).ready(function() {
  var currentWeatherObject = new Weather();

  $('.form-submit').submit(function() {
    event.preventDefault();
    var city = $('#location').val();
    var temp = $('#temp').val();
    $('#location').val("");
    currentWeatherObject.getWeather(city);
    if (temp === "f"){
      console.log(temp);
      $(".showTempF").show();
      $(".showTempC").hide();
    } else {
      console.log(temp);
      $(".showTempF").hide();
      $(".showTempC").show();
    }
  });
});
