const GOOGLE_API_KEY = "AIzaSyDExmNY40i0jMDsUfDIgcksjYZmr4L0Ems";

const proxy_url = 'https://cors-anywhere.herokuapp.com/';

const CITY_PLACE_ID_BASE_URL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=AIzaSyDExmNY40i0jMDsUfDIgcksjYZmr4L0Ems&input={city_name}&inputtype=textquery";

const CITY_DETAILS_BASE_URL = "https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyDExmNY40i0jMDsUfDIgcksjYZmr4L0Ems&place_id={place_id}";

const CITY_PHOTOS_URL = "https://maps.googleapis.com/maps/api/place/photo?photoreference={photoreference}&sensor=false&maxheight=500&maxwidth=500&key=AIzaSyDExmNY40i0jMDsUfDIgcksjYZmr4L0Ems"
 //"https://maps.googleapis.com/maps/api/place/photo?maxwidth=640&photoreference={photoreference}"

const RAZORPAY_IFSC_BASE_URL = "https://ifsc.razorpay.com/";
// stock search
const STOCK_SEARCH_BASE_URL = "https://api.iextrading.com/1.0/ref-data/symbols/"

// filter region US

// get quote

const GET_QUOTE_BASE_URL =  "https://cloud.iexapis.com/stable/stock/{symbol}/quote?token=pk_06b7d5976082477baebf4b538dee3afb"
// company details
const COMPANY_DETAILS_BASE_URL =  "https://cloud.iexapis.com/stable/stock/{symbol}/company?token=pk_06b7d5976082477baebf4b538dee3afb"
// stock chart data
const STOCK_CHART_DATA_BASE_URL =  "https://sandbox.iexapis.com/stable/stock/{symbol}/chart/2y?token=Tpk_8188b3b399e14b138b089a49afc336f1";

// weather API key
const WEATHER_API_KEY = "eee5d0619d3cb02ed044cbe2e0d78ef3";

// weather for geo location
const WEATHER_GEOLOCATION_API = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&units=metric&appid="+WEATHER_API_KEY;

const WEATHER_ICON_BASE_URL = "https://openweathermap.org/img/w/{weather-icon}.png";

let methodVal = "GET";

let useProxy = false;