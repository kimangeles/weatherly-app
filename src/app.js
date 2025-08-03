function refreshWeather (response) {
    let temperatureElement = document.querySelector ("#temp");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");

    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);
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