/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

//   <div class="weatherContainer">
//   <h3>Weather in Columbus</h3>
//   <p id="currentTemp">temperature: </p>
//   <img id="iconWeather">
//   <div class="temp">
//     <p id="minTemp"></p>
//     <p id="maxTemp"></p>
//   </div>
// </div>
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
      TempMin.textContent+=Number((data.main[0].temp_min - 273.15)+33.8).toFixed(5)+"°C";
      TempMax.textContent+=Number((data.list[0].main.temp_max - 273.15)+33.8).toFixed(5)+"°C";
      let icon = data.list[0].weather[0].icon;
      imgIcon.src ="https://openweathermap.org/img/wn/"+ icon + "@2x.png";
    })
    .catch(err => alert("something went wrong: Please check your internet connection"))
  
  }


  