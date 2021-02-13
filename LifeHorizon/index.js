let param1 = ""; // climate
let param2 = ""; // cost of living
let param3 = ""; // medicinal facilities
let param4 = ""; // night life 
let param5 = ""; // job oppurtunities  
let sortedArray = [];
let firstTime = true;

let placeID = "";

document.body.style.backgroundColor = "#c8b7dc";

let sliderClimate = document.getElementById("climate");
let sliderCostOfLiving = document.getElementById("costOfLiving");

let sliderMedicinalFacilities = document.getElementById("medicinalFacilities");
let sliderNightLife = document.getElementById("nightLife");

let sliderJobOppurtunities = document.getElementById("jobOppurtunities");

//var output = document.getElementById("demo");
// output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
/*sliderClimate.oninput = function() {
//  output.innerHTML = this.value; 
 
let weightage = [sliderClimate.value/10,sliderCostOfLiving.value/10,sliderMedicinalFacilities.value/10,sliderNightLife.value/10,sliderJobOppurtunities.value/10];
console.log(weightage); 
calculate(weightage);
} 8*/




let maxTotal = 100, // define the max sum of values
  inputs = [].slice.call(document.getElementsByTagName('input')), // refrence to the elements
  getTotal = function () { // helper function to calculate the sum
    let sum = 0;
    inputs.forEach(function (input) {
      sum += parseInt(input.value, 10);
    });
    return sum;
  },
  maxReached = function (e) {  // check if the max is reached
    let sum = getTotal(), target;

    if (sum > maxTotal) {
      target = e.target;
      // set the max possible value if the user, for example, clicks too far to the right
      target.value = target.value - (sum - maxTotal);
      // next line is just for demonstrational purposes
      //  document.getElementById('total').innerHTML = getTotal();

      // prevent increasing the value
      e.preventDefault();


      return false;
    } else if (sum <= maxTotal) {
      let weightage = [sliderClimate.value / 10, sliderCostOfLiving.value / 10, sliderMedicinalFacilities.value / 10, sliderNightLife.value / 10, sliderJobOppurtunities.value / 10];
      calculate(weightage);
    }
    // next line is just for demonstrational purposes
    //   document.getElementById('total').innerHTML = getTotal();

    // everything's fine, nothing to do.
    return true;
  };

// attach the maxReached function to your inputs
inputs.forEach(function (input) {
  input.addEventListener('input', maxReached);
});
let submitButton = document.getElementById("load1");
submitButton.addEventListener('click', function (event) {
  if (event.target.value === 'reset') {
    inputs.forEach(function (input) {
      input.value = 0;
    });
    event.target.value = 'process';
    event.target.innerHTML = 'process';
    setProgress(0, 0, 0, 0, 0);
    firstTime = true;

  } else {
    event.target.value = 'reset';
    event.target.innerHTML = 'reset';
    firstTime = false;
    setInterval(setProgress((Object.values(sortedArray[0])[1]), (Object.values(sortedArray[1])[1]), (Object.values(sortedArray[2])[1]), (Object.values(sortedArray[3])[1]), (Object.values(sortedArray[4])[1])), 1000);
  }
},
  false);



// 25 - 5+5+5+5+5 - 
/*
let inputs = document.getElementById("gen-form").elements;
let submitButton =  inputs["submitButton"];
submitButton.addEventListener("click", function() {
    param1  = inputs["ifscField"].value? inputs["ifscField"].value.trim():param1;
    if(param1 && param1!==""){
   */

/*
}else{
document.getElementById("searchResults").innerHTML = "Please enter valid IFSC code";
}
});


let a = [ 1, 1, 1, 1, 1 ]; // contains all Hyderabad while bengalure chennai with limitations

let b = [ 1, 1, 1, 2, 0 ]; // 

let C = [ 1, 1, 3, 0, 0 ]; 
let d = [ 1, 2, 2, 0, 0 ]; 

let e = [ 1, 4, 0, 0, 0 ]; // 1st two best cities in one category, 3rd one city that is found in both category

let f = [ 2, 3, 0, 0, 0 ]; // All three cities categories in two category. Common & then high marks in category  

let g = [ 0, 0, 0, 5, 0 ]; // All three best cities in that one category 
*/

function calculate(weitage) {
  let climate = ["Pune", "Belgaum", "Thekkady", "Bengaluru", "Hyderabad", "Nainital", "Mysore", "Srinagar", "Shimla", "Nashik"]; // https://zolostays.com/blog/cities-with-best-weather-in-india/

  let costOfLiving = ["Thiruvananthapuram", "Kolkata", "Chennai", "Bhubaneswar", "Hyderabad", "Indore", "Mangalore", "Vadodara", "Jaipur"]; // https://www.innfinity.in/travel/cheapest-city-in-india/

  let medicinalFacilities = ["Chennai", "Mumbai", "New Delhi", "Goa", "Bengaluru", "Ahmedabad", "Coimbatore", "Vellore", "Alleppey", "Hyderabad"]; // https://www.skyscanner.co.in/news/medical-tourism-spots-in-india

  let nightLife = ["Goa", "Mumbai", "Delhi", "Bengaluru", "Pune", "Hyderabad", "Chandigarh", "Jaipur", "Kolkata", "Nashik"]; //  https://theculturetrip.com/asia/india/articles/10-best-cities-india-nightlife/

  let jobOppurtunities = ["Bengaluru", "Hyderabad", "Mumbai", "Delhi", "Chennai", "Pune", "Kolkata"]; // https://www.desiblitz.com/content/top-cities-for-jobs-in-india

  let factors = [climate, costOfLiving, medicinalFacilities, nightLife, jobOppurtunities];

  // individual marks in their categories, user allocated weightage and then combine categories
  for (p = 0; p < factors.length; p++) {
    let maxMarkInCategory = 10 * weitage[p];
    for (i = 0; i < factors[p].length; i++) {
      factors[p][i] = { [factors[p][i]]: (maxMarkInCategory > 0) ? maxMarkInCategory-- : 0 };
    }
  }

  let result1 = [...factors[0], ...factors[1], ...factors[2], ...factors[3], ...factors[4]];
  // console.log(result1);

  // add all points gathered by cities across factors
  const mergeCityPoints = data => {
    const result = {}; //(1)

    data.forEach(basket => { //(2)
      for (let [key, value] of Object.entries(basket)) { //(3)
        if (result[key]) { //(4)
          result[key] += value; //(5)
        } else { //(6)
          result[key] = value;
        }
      }
    });
    return result; //(7)
  };

  const mergedObject = mergeCityPoints(result1);
  const objectArray = Object.entries(mergedObject);


  sortedArray = objectArray.sort(function (a, b) {
    return b[1] - a[1];
  });
  // console.log(sortedArray);

  console.log("We suggest following 5 cities that great for settling for you");
  for (let i = 0; i < 5; i++) {
    // console.log(sortedArray[i]);
    console.log(Object.values(sortedArray[i])[0] + "  Matching: " + ((Object.values(sortedArray[i])[1])) + "  points");
  }
  if (!firstTime) {
    setProgress((Object.values(sortedArray[0])[1]), (Object.values(sortedArray[1])[1]), (Object.values(sortedArray[2])[1]), (Object.values(sortedArray[3])[1]), (Object.values(sortedArray[4])[1]));
    firstTime = false;
  }
}

let bar1 = document.getElementById("city1");
let bar2 = document.getElementById("city2");
let bar3 = document.getElementById("city3");
let bar4 = document.getElementById("city4");
let bar5 = document.getElementById("city5");


let progress = 0;


function setProgress(percent1, percent2, percent3, percent4, percent5) {
  bar1.style.width = percent1 + "%";
  bar2.style.width = percent2 + "%";
  bar3.style.width = percent3 + "%";
  bar4.style.width = percent4 + "%";
  bar5.style.width = percent5 + "%";

  bar1.innerHTML = "<b>" + Object.values(sortedArray[0])[0] + "</b>   " + ((Object.values(sortedArray[0])[1])) + "  points"; // Display the default slider value
  bar2.innerHTML = "<b>" + Object.values(sortedArray[1])[0] + "</b>   " + ((Object.values(sortedArray[1])[1])) + "  points";; // Display the default slider value
  bar3.innerHTML = Object.values(sortedArray[2])[0] + "   " + ((Object.values(sortedArray[2])[1])) + "  points";; // Display the default slider value
  bar4.innerHTML = Object.values(sortedArray[3])[0] + "   " + ((Object.values(sortedArray[3])[1])) + "  points";; // Display the default slider value
  bar5.innerHTML = Object.values(sortedArray[4])[0] + "   " + ((Object.values(sortedArray[4])[1])) + "  points";; // Display the default slider value

  /* if (percent > 90)
       bar.className = "bar bar-success";
   else if (percent > 50)
       bar.className = "bar bar-warning";
       */
  let progressBar = document.getElementsByClassName('progress')

  for (let i = 0; i < progressBar.length; i++) {
    if (Object.values(sortedArray[i])[0]) {
      progressBar[i].addEventListener('click', function () {

        fetchAPIData(BASE_URL.replace("{city_name}", Object.values(sortedArray[i])[0])+"&locationbias=point:20.5937,78.9629")
          .then(data => {

            if (data.status === "OK") {
              if (data.candidates) {
                placeID = data.candidates[0].place_id;

                fetchAPIData(CITY_DETAILS_BASE_URL.replace("{place_id}", placeID))
                  .then(data => {
                    console.log(data); // JSON data parsed by `data.json()` call

                    if (data.status === "OK") {
                      console.log(data); // JSON data parsed by `data.json()` call
                      geocodeAddress(data.result.geometry.location);
                      let photoreference = [];
                      let title = document.getElementById("exampleModalLabel");

                      if (data.result.photos) {
                        let photos = data.result.photos;
                        for (let k = 0; k < photos.length; k++) {
                          photoreference.push(photos[k].photo_reference);
                        }
                        if (photoreference.length) {
                          let slides = document.getElementsByClassName("mySlides");
                          for (let i = 0; i < slides.length && photoreference.length; i++) {
                            let img = slides[i].getElementsByTagName("img");
                            img[0].src = CITY_PHOTOS_URL.replace("{photoreference}", photoreference[i]);

                          }
                          title.innerHTML = data.result.formatted_address ? data.result.formatted_address : data.result.photos ? "Pics from the City" : "No pics now";
                          let website = document.getElementsByClassName("website");
                          website[0].href = data.result.website ? data.result.website : "";
                          website[0].innerHTML = data.result.website ? data.result.website : "";
                          showSlides(1);
                          console.log("map url:" + data.result.url.split("&ftid", 1)[0].replace("maps.google.com/", "maps.google.com/maps/embed/v1/place") + "&key=" + GOOGLE_API_KEY);
                          document.getElementById("map-embed").src = data.result.url.split("&ftid", 1)[0].replace("maps.google.com/", "maps.google.com/maps/embed/v1/place") + "&key=" + GOOGLE_API_KEY;
                        }
                      }else{
                        title.innerHTML = "No pics available now";
                      }
                    }
                  });


              }
            }
          });
        // event.target.value = 'process';

      });
    }
  }
}

// courousel
let slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

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
  /*
    geocoder.geocode({ address: address }, (results, status) => {
      if (status === "OK") {
        resultsMap.setCenter(results[0].geometry.location);
        new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location,
        });
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
    */
}

