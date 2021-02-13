let param1 = "13.0827";
let param2 = "80.2707";
let temperature = "";
let categorySelected = "";

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}


function showPosition(position) {
  console.log("Latitude: " + position.coords.latitude +
    "Longitude: " + position.coords.longitude);
  param1 = position.coords.latitude;
  param2 = position.coords.longitude;

  fetchAPIData(BASE_URL.replace("{lat}", param1).replace("{lon}", param2))
    .then(data => {
      console.log(data); // JSON data parsed by `data.json()` call
      temperature = data.main.temp;
      if (data.weather[0].icon) {
        let dressChart = document.getElementById("weather-icon");
        dressChart.src = WEATHER_ICON_BASE_URL.replace("{weather-icon}", data.weather[0].icon);
      }
      if (data.weather[0].description) {
        let weatherReport = document.getElementById("weather-report");
        weatherReport.innerHTML = '"'+data.weather[0].description+'"';
        let weatherReport2 = document.getElementById("weather-report2");
        weatherReport2.innerHTML = "<b>wind-speed</b>: "+data.wind.speed+ "  <b>wind-deg</b>: "+data.wind.deg+ "  <b>humidity</b>: "+data.main.humidity+ "  <b>pressure</b>: "+data.main.pressure;
      }
      let updatedTime = document.getElementById("updated-time");
      updatedTime.innerHTML = "Last updated by "+new Date().toString();
      loadResults(categorySelected);
    });


}

window.onload = function () {
  $("#tableMenu a").on('click', function (e) {
    e.preventDefault(); // cancel the link behaviour
    categorySelected = $(this).text();
    $("#dropdownMenuButton").text(categorySelected);
    getLocation(showPosition);
  });
};

function loadResults(categorySelected) {
  let adviceElement = document.getElementById("advice");
  let dressChart = document.getElementById("dressChart");
  if (categorySelected === "Dress for jogging") {
    dressChart.src = "images/WeatherDresses/run4.jpg";
    adviceElement.innerHTML = temperature < 28 ? "The temperature now is <span style='font-size:40px'>" + celsiusToFahrenheit(temperature) + String.fromCharCode(176) + "</span>F (" + temperature + "* C)." : "The temperature now is <span style='font-size:40px'>" + celsiusToFahrenheit(temperature) + String.fromCharCode(176) + "</span>F (" + temperature + "* C). It is not optimum for running. Kindly run some other time";
  } else if (categorySelected === "Kids") {
    dressChart.src = "images/WeatherDresses/kids.png";
    adviceElement.innerHTML = "The temperature now is <span style='font-size:40px'>" + celsiusToFahrenheit(temperature) + String.fromCharCode(176) + "</span>F (" + temperature + "* C).";

  } else if (categorySelected === "Baby") {
    dressChart.src = "images/WeatherDresses/baby.jpg";
    adviceElement.innerHTML = "The temperature now is <span style='font-size:40px'>" + celsiusToFahrenheit(temperature) + String.fromCharCode(176) + "</span>F (" + temperature + "* C).";

  } else if (categorySelected === "Men - Semi Casual") {
    dressChart.src = "images/WeatherDresses/Men_Semi_Casual.jpg";
    adviceElement.innerHTML = "The temperature now is <span style='font-size:40px'>" + celsiusToFahrenheit(temperature) + String.fromCharCode(176) + "</span>F (" + temperature + "* C).";

  }
}

function celsiusToFahrenheit(valNum) {
  valNum = parseFloat(valNum);
  return Math.round((valNum * 1.8) + 32);
}

/*
let inputs = document.getElementById("gen-form").elements;
let submitButton =  inputs["submitButton"];
submitButton.addEventListener("click", function() {
    param1  = inputs["ifscField"].value? inputs["ifscField"].value.trim():param1;
    if(param1 && param1!==""){

    fetchAPIData(BASE_URL.replace("{lat}",param1).replace("{lon}",param2))
    .then(data => {
      console.log(data); // JSON data parsed by `data.json()` call
    //  document.getElementById("searchResults").innerHTML = "Address: "+data;
    });

  }else{
    document.getElementById("searchResults").innerHTML = "Please enter valid IFSC code";
  }
  });
*/
