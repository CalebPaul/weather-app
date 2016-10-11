var apiKey = require('./../.env').apiKey;

function Weather() {
}


Weather.prototype.convertFahr = function(kelvin){
    var kelvinInt = parseInt(kelvin);
    console.log("kelvinInt = " + kelvinInt);
    var fahrInt = Math.floor(kelvinInt * 9/5 -459.67);
    console.log("fahrInt = " + fahrInt);
    var output = fahrInt + " degrees F";
    return output;
  }

Weather.prototype.convertCelsius = function(kelvin){
    var kelvinInt = parseInt(kelvin);
    console.log("kelvinInt = " + kelvinInt);
    var celsiusInt = Math.floor(kelvinInt - 273.15);
    console.log("celsius = " + celsiusInt);
    var output = celsiusInt + " degrees C";
    return output;
  }

Weather.prototype.getWeather = function(city) {
  var that = this;//here this is a weather obj
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    console.log(response);
    $('.showDescription').text("In " + city + " it will be a " + response.weather[0].description + " today.");
    $('.showTempF').text("The temperature is " + that.convertFahr(response.main.temp) + " ."); //here this is response obj
    $('.showTempC').text("The temperature is " + that.convertCelsius(response.main.temp) + " ."); //here this is response obj
    $('.showHumidity').text("The humidity is " + response.main.humidity + "%.");
    $('.showWindSpeed').text("The wind speed is " + response.wind.speed + "mph.");
    $('.showWindDir').text("The wind direction is " + response.wind.deg + " degrees.");
  }).fail(function(error) {
    $('.showTemp').text(error);
  });
};

exports.weatherModule = Weather;
