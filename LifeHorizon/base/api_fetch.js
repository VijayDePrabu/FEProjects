
// fetch(BASE_URL+ param1, {method: methodVal}).then( response => response.text()).then(data => {console.log(data)});

async function fetchAPIData(url = '', data = {}) {
  try {
    let response = '';
    if (methodVal === 'GET') {
      response = await fetch(useProxy?proxy_url+url:url);
    } else {
      // Default options are marked with *
      response = await fetch(URL+ methodVal === 'POST'? "": (param1+""),{method: methodVal, body: JSON.stringify(data), header: {
        "Content-type": "application/json; charset=UTF-8",
      },});
    }
    let result = await response.json();
    return result;// parses JSON response into native JavaScript objects
  } catch (error) {
    return error; // parses JSON response into native JavaScript objects
  }
}








