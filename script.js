const temp = document.getElementById("temp");
const weather = document.getElementById("weather");
const icon_box = document.getElementById("icon_box");
const city = document.getElementById("location");
const time = document.getElementById("time");

function fetchWeather() {
  fetch(
    "http://api.weatherapi.com/v1/current.json?key= 09496abca0a4402797473219223007&q=Berlin&aqi=no"
  )
    .then((res) => res.json())
    .then((data) => {
      const accWeather = data.current.condition.text;
      const accTime = data.location.localtime;
      const accTemp = data.current.temp_c;
      const accCity = data.location.name;
      const accIcon = data.current.condition.icon;

      temp.innerText = accTemp;
      weather.innerText = accWeather;
      time.innerText = accTime;
      city.innerText = accCity;
      icon_box.innerHTML = `<img class="icon" src="${accIcon}"></img>`;
    });
}

// Event listener
addEventListener("load", () => {
  fetchWeather();
});
