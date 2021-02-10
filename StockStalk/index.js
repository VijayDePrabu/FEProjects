let param1  = "";
/*
let inputs = document.getElementById("gen-form").elements;
let submitButton =  inputs["submitButton"];
submitButton.addEventListener("click", function() {
    param1  = inputs["ifscField"].value? inputs["ifscField"].value.trim():param1;
    if(param1 && param1!==""){
      */
    fetchAPIData(BASE_URL + param1)
    .then(data => {
      console.log(data); // JSON data parsed by `data.json()` call
    //  document.getElementById("searchResults").innerHTML = "Address: "+data;
    });
    /*
  }else{
    document.getElementById("searchResults").innerHTML = "Please enter valid IFSC code";
  }
  });
*/
