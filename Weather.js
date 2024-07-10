const apiKey = "86a3fef62e40fad18e6a62633f9377dc";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=";

const Box = document.querySelector(".search input");
const button = document.querySelector(".search button");
const weatherIcon = document.querySelector(".Weather-icon");

const checkWeather = async (city) => {
  const response = await fetch(apiURL + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    let data = await response.json();
    console.log(data);
    document.querySelector(".temp").innerHTML =
      Math.round(data?.main?.temp - 273) + "°C";
    document.querySelector(".city").innerHTML = data?.name;
    document.querySelector(".Humidity").innerHTML = data?.main?.humidity + "%";
    document.querySelector(".Wind").innerHTML = data?.wind?.speed + " Km/hr";

    if (data?.weather[0]?.main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data?.weather[0]?.main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data?.weather[0]?.main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data?.weather[0]?.main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data?.weather[0]?.main == "Mist") {
      weatherIcon.src = "images/mist.png";
    } else if (data?.weather[0]?.main == "Snow") {
      weatherIcon.src = "images/snow.png";
    }
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";

  }
};

button.addEventListener("click", (e) => {
  checkWeather(Box.value);
});
