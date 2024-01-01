let date = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let p = document.querySelector("#the-day");
let hrs = date.getHours();
let min = date.getMinutes();
let dai = date.getDay();
p.innerHTML = `${days[dai]} ${hrs}:${min} `;

let search = document.querySelector("#search");

function refreshWeather(response) {
  let temperatureElement = document.querySelector(".maintemp");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("h1");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;
  let iconElement = document.querySelector("#icon");
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}"class="weather-app-icon"/>`;

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

}
function searchCity(city) {
  let apiKey = "3oe104ta9fb0de8314f715a9bb031983";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}
function city(event) {
  event.preventDefault();
  let name = document.querySelector("h1");
  let town = document.querySelector("#city-input");

  if (town !== "") {
    searchCity(`${town.value}`);
  } else {
    alert("Insert a City name");
    searchCity("London");
  }
}
search.addEventListener("click", city);
