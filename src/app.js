function refreshWeather (response) {
    let temperatureElement = document.querySelector ("#temp");
    let temperature = response.data.temperature.current;
    temperatureElement.innerHTML = Math.round(temperature);

    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.city;
    
  

    let conditionElement = document.querySelector ("#description");
    conditionElement.innerHTML = response.data.condition.description;

    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;

    let windElement = document.querySelector ("#wind");
    windElement.innerHTML = `${response.data.wind.speed}km/h`;

    let timeElement = document.querySelector ("#time");
    let date = new Date(response.data.time * 1000);
    timeElement.innerHTML = formatDate(date);

}

function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    let day = days[date.getDay()];

    if (minutes < 10) {
        minutes =`0${minutes}`;
    }

    return `${day} ${hours}: ${minutes}`;
}


function searchCity(city) {
    let apiKey = "ef35d08c0bct4055aobb4d3991a2adc1"
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`
    axios.get(apiURL).then(refreshWeather);
}


function searchCitysubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchCitysubmit);

searchCity("Philippines");