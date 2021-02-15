let param1  = "";

let inputs = document.getElementById("gen-form").elements;
let submitButton =  inputs["submitButton"];
submitButton.addEventListener("click", function() {
    param1  = inputs["ifscField"].value? inputs["ifscField"].value.trim():param1;
    if(param1 && param1!==""){
    fetchAPIData(BASE_URL + param1)
    .then(data => {
      console.log(data); // JSON data parsed by `data.json()` call
      document.getElementById("searchResults").innerHTML = "Address: "+data.ADDRESS;
      let address = data.ADDRESS.replace(" ","+");
      fetchAPIData(proxy_url+IFSC_ADDRESS_LOCATION_COORDINATES_URL.replace("{ADDRESS}", address) + param1)
      .then(data => {
        console.log(data); // JSON data parsed by `data.json()` call
        
  
          
      });

    });
  }else{
    document.getElementById("searchResults").innerHTML = "Please enter valid IFSC code";
  }
  });



  let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map-embed"), {
    center: { lat: 20.5937, lng: 78.9629 },
    zoom: 4,
  });

}

function geocodeAddress(location) {
  map.setCenter(location);
  map.setZoom(8);
  new google.maps.Marker({
    map: map,
    position: location,
  });
}
//prompt("IFSC");