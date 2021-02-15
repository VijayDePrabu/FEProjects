let param1  = "";
let search_word = "reliance";
/*
let inputs = document.getElementById("gen-form").elements;
let submitButton =  inputs["submitButton"];
submitButton.addEventListener("click", function() {
    param1  = inputs["ifscField"].value? inputs["ifscField"].value.trim():param1;
    if(param1 && param1!==""){
      */
     let list = document.getElementById("list");
     document.getElementById('ltp-card').style.visibility = 'hidden';
     let companySite =  document.getElementById("company-site");


     let cardTitle =  document.getElementById("card-title");
     let cardSubtitle =  document.getElementById("card-subtitle");
     let cardText =  document.getElementById("card-text");
     let cardExchange =  document.getElementById("exchange");
     let cardMore =  document.getElementById("more");

     let cardBody = document.getElementById("company-details-content");


     let searchButon =  document.getElementById("search");
     searchButon.addEventListener("input", function() {
      search_word  = searchButon.value? searchButon.value.trim():param1;
      console.log(param1);
      if(search_word.length >2){
        document.getElementById('ltp-card').style.visibility = 'hidden';

      fetchAPIData(BASE_URL + param1)
      .then(data => {
        let result = data.filter(item => item.name.includes(search_word.toUpperCase()));
        if(result.length == 0){
          result = data.filter(item => item.symbol === (search_word.toUpperCase()));
        }
        console.log(result); // JSON data parsed by `data.json()` call
        list.innerHTML = "";
        
        cardTitle.innerHTML = "";
        cardSubtitle.innerHTML = "";
        cardText.innerHTML = "";
        cardExchange.innerHTML = "";
        cardMore.innerHTML = "";


        result.forEach(item => {
          addListItem(list, item)
        });

      });
    }
    });

    function addListItem(list, item){
      let x = document.createElement("button");
      x.setAttribute('type','button');
      x.setAttribute("class","list-group-item list-group-item-action");
      x.setAttribute("value",item.symbol);
      x.innerHTML = "<b>"+item.symbol+"</b>"+"<br>"+item.name;
      list.appendChild(x);

      x.addEventListener("click", function() {
         let symbolClicked = x.value;
         document.getElementById('ltp-card').style.visibility = 'visible';

         fetchAPIData(GET_QUOTE_BASE_URL.replace("{symbol}",symbolClicked))
         .then(data => {
          
           console.log(data); // JSON data parsed by `data.json()` call

    
           cardTitle.innerHTML = data.companyName;
           cardSubtitle.innerHTML = "LTP: <span class='text-success'>"+ data.latestPrice+"</span>";
           cardText.innerHTML = "change: "+ data.change + " change %: "+ data.changePercent;

           cardExchange.innerHTML = data.primaryExchange;
           cardMore.innerHTML = "COMPANY DETAILS";

           cardMore.addEventListener("click", function() {

            fetchAPIData(COMPANY_DETAILS_BASE_URL.replace("{symbol}",symbolClicked))
            .then(data => {
             
              console.log(data); 
              let keys = Object.keys(data);

              let values = Object.keys(data).map(key => data[key]);
              cardBody.innerHTML ="";
                           
               for(let i=0; i<keys.length;i++){
                let p = document.createElement("p");
                p.setAttribute("class","card-text");
                 p.innerHTML = "<b>"+ keys[i].capitalize() +":</b>"+ " "+ (values[i] === null?"NA":values[i]);  
                 cardBody.appendChild(p);
               }
               if(data.website){
               companySite.href = data.website;
                let input = document.createElement("input");
                input.setAttribute("type","button");
                input.setAttribute("value","Visit Company Website");
                companySite.appendChild(input);
              }
            });

           });

         });
      });


    }

    /*
  }else{
    document.getElementById("searchResults").innerHTML = "Please enter valid IFSC code";
  }
  });
*/
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}
