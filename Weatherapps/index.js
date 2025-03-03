const apiKey = "882809b0d93e2d4c4193bbfcc367ec47";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icons");

async function checkWeather(cityName) {
  try {
    const response = await fetch(apiUrl + `${cityName}` + `&appid=${apiKey}`);
    var data = await response.json();

    if (data.cod === "404") {
      showError("Invalid city name. Please try again.");
      document.querySelector(".weather").style.display = "none";
      return;
    }

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "img/cloudy.svg";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "img/clear-day.svg";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "img/rainy-2.svg";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "img/cloudy-2-day.svg";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "img/fog.svg";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "img/snowy-1.svg";
    }

    document.querySelector(".weather").style.display = "block";
  } catch (error) {
    showError("An error occurred. Please try again.");
    document.querySelector(".weather").style.display = "none";
  }
}

function showError(message) {
  const errorPopup = document.createElement("div");
  errorPopup.className = "error-popup";
  errorPopup.textContent = message;
  document.body.appendChild(errorPopup);

  setTimeout(() => {
    errorPopup.remove();
  }, 3000);
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

searchBox.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    checkWeather(searchBox.value);
  }
});
