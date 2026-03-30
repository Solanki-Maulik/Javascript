const form = document.querySelector(".input");
const input = document.querySelector("#inputvalue");

const cityName = document.querySelector(".cityName");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const windspeed = document.querySelector(".windspeed");

form.addEventListener("submit", getWeather);

function getWeather(event) {
  event.preventDefault();

  const city = input.value; // user input

  const apiKey = "dbf5373dc7cc45438a7171627262903";

  fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        cityName.textContent = "City not found. Please try again.";
      } else {
        cityName.textContent = "City: " + data.location.name;
        temperature.textContent = "Temp: " + data.current.temp_c + "°C";
        description.textContent = "Condition: " + data.current.condition.text;
        windspeed.textContent = "Wind: " + data.current.wind_kph + " kph";
      }
    })
    .catch(error => {
      console.log("Error:", error);
    });
}

