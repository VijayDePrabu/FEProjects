let param1  = "13.0827";
let param2  = "80.2707";

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
  param1  =  position.coords.latitude;
  param2  = position.coords.longitude;
  fetchAPIData(BASE_URL.replace("{lat}",param1).replace("{lon}",param2))
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
  //  document.getElementById("searchResults").innerHTML = "Address: "+data;
  });
}

getLocation(showPosition);
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
