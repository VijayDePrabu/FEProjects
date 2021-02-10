var URL = "https://6016419255dfbd00174cabb0.mockapi.io/api/v1/product/";
/*
fetch(URL).
then( response => response.json()).
then(data => console.log(data)).
catch(error => console.log("Error:" + error));

*/
let data = {
    name: "person corona",
    email: "person-dummy@mail.com",
  };
async function fetchData(methodValue, param1, data) {
    try {
        let response = '';
        if (methodValue === 'GET') {
            response = await fetch(URL + param1);
        } else {
            response = await fetch(URL+ methodValue === 'POST'? "": (param1+""),{method: methodValue, body: JSON.stringify(data), header: {
                "Content-type": "application/json; charset=UTF-8",
              },});
        }
        let result = await response.json();
         console.log(result);
    } catch(error) {
        console.log(error)
    }

}
fetchData('POST', 3);