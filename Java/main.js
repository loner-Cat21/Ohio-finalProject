/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  let weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?q=columbus&appid=c8b260397fd294145748ea4206128b3f';
  let TempMin = document.getElementById('minTemp');
  let TempMax = document.getElementById('maxTemp');
  let CurrentTemp = document.getElementById('currentTemp');
  let imgIcon = document.getElementById('iconWeather');

  function getInfo() {
    fetch(weatherAPI)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      TempMin.textContent = "Min Temp: " + Number((data.main.temp_min - 273.15) + 33.8).toFixed(2) + "°C";
      TempMax.textContent = "Max Temp: " + Number((data.main.temp_max - 273.15) + 33.8).toFixed(2) + "°C";
      CurrentTemp.textContent = "Current Temp: " + Number((data.main.temp - 273.15) + 33.8).toFixed(2) + "°C";
      let icon = data.weather[0].icon;
      imgIcon.src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    })
    .catch(err => alert("Something went wrong. Please check your internet connection."));
  }


  